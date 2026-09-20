'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3876",
  name: "Replace \"X\" with \"k\"",
  description: "Replaces every X with k.",
  run: (value) => String(value).split("X").join("k"),
});
