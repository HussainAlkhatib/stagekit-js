'use strict';

const stages = require('./modules');
const { createRegistry, createPipeline, defineStage } = require('./core/registry');
const errors = require('./core/errors');

const registry = createRegistry(stages);
const pipeline = createPipeline(registry.list());

module.exports = {
  stages,
  registry,
  pipeline,
  createRegistry,
  createPipeline,
  defineStage,
  errors,
};
