'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3846",
  name: "Replace \"W\" with \"P\"",
  description: "Replaces every W with P.",
  run: (value) => String(value).split("W").join("P"),
});
