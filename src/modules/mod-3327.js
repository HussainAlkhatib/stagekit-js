'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3327",
  name: "Replace \"O\" with \"k\"",
  description: "Replaces every O with k.",
  run: (value) => String(value).split("O").join("k"),
});
