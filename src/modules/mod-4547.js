'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4547",
  name: "Replace \"8\" with \"k\"",
  description: "Replaces every 8 with k.",
  run: (value) => String(value).split("8").join("k"),
});
