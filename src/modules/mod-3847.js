'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3847",
  name: "Replace \"W\" with \"Q\"",
  description: "Replaces every W with Q.",
  run: (value) => String(value).split("W").join("Q"),
});
