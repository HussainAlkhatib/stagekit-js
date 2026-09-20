'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4059",
  name: "Replace \"0\" with \"k\"",
  description: "Replaces every 0 with k.",
  run: (value) => String(value).split("0").join("k"),
});
