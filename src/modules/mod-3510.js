'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3510",
  name: "Replace \"R\" with \"k\"",
  description: "Replaces every R with k.",
  run: (value) => String(value).split("R").join("k"),
});
