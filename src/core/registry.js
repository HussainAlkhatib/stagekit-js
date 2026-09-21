'use strict';

const { StageError, PipelineError } = require('./errors');

const ID_PATTERN = /^mod-[0-9]{4}$/;

function defineStage(definition) {
  if (!definition || typeof definition !== 'object') {
    throw new StageError('stage definition must be an object');
  }

  const { id, name, run, description = '' } = definition;

  if (typeof id !== 'string' || !ID_PATTERN.test(id)) {
    throw new StageError('invalid stage id: ' + String(id));
  }
  if (typeof name !== 'string' || name.length === 0) {
    throw new StageError('stage ' + id + ' must have a non-empty name');
  }
  if (typeof run !== 'function') {
    throw new StageError('stage ' + id + ' must provide a run function');
  }

  return Object.freeze({ id, name, description, run });
}

function createRegistry(stages) {
  const map = new Map();

  for (const stage of stages) {
    if (!stage || typeof stage.id !== 'string') {
      throw new StageError('cannot register an invalid stage');
    }
    if (map.has(stage.id)) {
      throw new StageError('duplicate stage id: ' + stage.id);
    }
    map.set(stage.id, stage);
  }

  function findByPrefix(prefix) {
    return Array.from(map.values()).filter((stage) => stage.id.startsWith(prefix));
  }

  return {
    size: map.size,
    has: (id) => map.has(id),
    get: (id) => {
      if (!map.has(id)) {
        throw new StageError('unknown stage: ' + id);
      }
      return map.get(id);
    },
    list: () => Array.from(map.values()),
    ids: () => Array.from(map.keys()),
    findByName: (name) => {
      const needle = String(name);
      return Array.from(map.values()).filter((stage) => stage.name === needle);
    },
    search: (query) => {
      const needle = String(query).toLowerCase();
      return Array.from(map.values()).filter((stage) => {
        return (
          stage.id.toLowerCase().includes(needle) ||
          stage.name.toLowerCase().includes(needle) ||
          stage.description.toLowerCase().includes(needle)
        );
      });
    },
    nextId: () => {
      let n = map.size + 1;
      while (map.has('mod-' + String(n).padStart(4, '0'))) {
        n += 1;
      }
      return 'mod-' + String(n).padStart(4, '0');
    },
    findByPrefix,
  };
}

function createPipeline(stages) {
  const ordered = Array.isArray(stages) ? stages.slice() : [];

  // Backwards-compatible runner. The default call signature and behaviour
  // (run every stage in order, honour `limit`) are unchanged. Extra options
  // are opt-in:
  //
  //   options.limit   number  - stop after N stages (unchanged)
  //   options.onError string  - 'throw' (default) | 'skip' | 'stop'
  //                             | 'collect'
  //   options.trace   boolean - also record each step (see below)
  //   options.signal  AbortSignal - abort between stages
  //
  // A trace (returned only when `options.trace` is true) is an array of
  // { id, name, input, output, ms, error? }. It is also exposed on the
  // pipeline object as `.run.trace` after each run for convenience.
  function runPipeline(value, options = {}) {
    const limit = typeof options.limit === 'number' ? options.limit : ordered.length;
    const stop = Math.max(0, Math.min(limit, ordered.length));
    const onError = options.onError || 'throw';
    const trace = options.trace ? [] : null;
    if (trace) runPipeline.trace = trace;

    if (!['throw', 'skip', 'stop', 'collect'].includes(onError)) {
      throw new PipelineError('unknown onError strategy: ' + onError);
    }

    let current = value;

    for (let i = 0; i < stop; i += 1) {
      const stage = ordered[i];

      if (options.signal && options.signal.aborted) {
        const abortErr = new PipelineError('pipeline aborted before ' + stage.id);
        abortErr.aborted = true;
        if (trace) trace.push({ id: stage.id, name: stage.name, input: current, error: abortErr });
        if (onError === 'throw' || onError === 'stop') throw abortErr;
        break;
      }

      const started = options.trace ? Date.now() : 0;
      try {
        const output = stage.run(current, options);
        if (trace) {
          trace.push({ id: stage.id, name: stage.name, input: current, output, ms: Date.now() - started });
        }
        current = output;
      } catch (err) {
        const wrapped = err instanceof StageError ? err : new PipelineError(
          'stage ' + stage.id + ' (' + stage.name + ') failed: ' + (err && err.message ? err.message : String(err))
        );
        wrapped.stageId = stage.id;
        wrapped.cause = err;

        if (trace) {
          trace.push({ id: stage.id, name: stage.name, input: current, error: wrapped, ms: Date.now() - started });
        }

        if (onError === 'throw') throw wrapped;
        if (onError === 'stop') break;
        // 'skip' keeps the previous value and continues;
        // 'collect' keeps the previous value and records the error.
      }
    }

    if (trace) runPipeline.trace = trace;
    return current;
  }

  runPipeline.stages = ordered.slice();

  return runPipeline;
}

module.exports = { defineStage, createRegistry, createPipeline };
