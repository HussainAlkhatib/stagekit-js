'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1044",
  name: "Replace \"e\" with \"k\"",
  description: "Replaces every e with k.",
  run: (value) => String(value).split("e").join("k"),
});
