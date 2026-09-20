'use strict';

const { StageError } = require('./errors');

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

  return function runPipeline(value, options = {}) {
    const limit = typeof options.limit === 'number' ? options.limit : ordered.length;
    const stop = Math.max(0, Math.min(limit, ordered.length));
    let current = value;

    for (let i = 0; i < stop; i += 1) {
      current = ordered[i].run(current, options);
    }

    return current;
  };
}

module.exports = { defineStage, createRegistry, createPipeline };
