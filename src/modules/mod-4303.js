'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4303",
  name: "Replace \"4\" with \"k\"",
  description: "Replaces every 4 with k.",
  run: (value) => String(value).split("4").join("k"),
});
