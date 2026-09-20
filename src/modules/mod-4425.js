'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4425",
  name: "Replace \"6\" with \"k\"",
  description: "Replaces every 6 with k.",
  run: (value) => String(value).split("6").join("k"),
});
