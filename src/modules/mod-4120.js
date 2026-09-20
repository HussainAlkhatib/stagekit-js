'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4120",
  name: "Replace \"1\" with \"k\"",
  description: "Replaces every 1 with k.",
  run: (value) => String(value).split("1").join("k"),
});
