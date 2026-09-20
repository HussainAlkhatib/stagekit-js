'use strict';

class StageError extends Error {
  constructor(message) {
    super(message);
    this.name = 'StageError';
  }
}

class PipelineError extends StageError {
  constructor(message) {
    super(message);
    this.name = 'PipelineError';
  }
}

module.exports = { StageError, PipelineError };
