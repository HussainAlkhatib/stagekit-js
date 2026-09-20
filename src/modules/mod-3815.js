'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3815",
  name: "Replace \"W\" with \"k\"",
  description: "Replaces every W with k.",
  run: (value) => String(value).split("W").join("k"),
});
