'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3754",
  name: "Replace \"V\" with \"k\"",
  description: "Replaces every V with k.",
  run: (value) => String(value).split("V").join("k"),
});
