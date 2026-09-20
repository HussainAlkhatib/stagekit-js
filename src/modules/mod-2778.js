'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2778",
  name: "Replace \"F\" with \"k\"",
  description: "Replaces every F with k.",
  run: (value) => String(value).split("F").join("k"),
});
