'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3022",
  name: "Replace \"J\" with \"k\"",
  description: "Replaces every J with k.",
  run: (value) => String(value).split("J").join("k"),
});
