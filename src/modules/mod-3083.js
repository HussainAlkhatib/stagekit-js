'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3083",
  name: "Replace \"K\" with \"k\"",
  description: "Replaces every K with k.",
  run: (value) => String(value).split("K").join("k"),
});
