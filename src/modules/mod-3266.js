'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3266",
  name: "Replace \"N\" with \"k\"",
  description: "Replaces every N with k.",
  run: (value) => String(value).split("N").join("k"),
});
