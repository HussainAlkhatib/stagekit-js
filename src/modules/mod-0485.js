'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0485",
  name: "Replace \"b\" with \"k\"",
  description: "Replaces every b with k.",
  run: (value) => String(value).split("b").join("k"),
});
