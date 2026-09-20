'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1985",
  name: "Replace \"s\" with \"k\"",
  description: "Replaces every s with k.",
  run: (value) => String(value).split("s").join("k"),
});
