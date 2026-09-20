'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3053",
  name: "Replace \"J\" with \"Q\"",
  description: "Replaces every J with Q.",
  run: (value) => String(value).split("J").join("Q"),
});
