'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2473",
  name: "Replace \"A\" with \"k\"",
  description: "Replaces every A with k.",
  run: (value) => String(value).split("A").join("k"),
});
