'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2534",
  name: "Replace \"B\" with \"k\"",
  description: "Replaces every B with k.",
  run: (value) => String(value).split("B").join("k"),
});
