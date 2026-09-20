'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1802",
  name: "Replace \"p\" with \"k\"",
  description: "Replaces every p with k.",
  run: (value) => String(value).split("p").join("k"),
});
