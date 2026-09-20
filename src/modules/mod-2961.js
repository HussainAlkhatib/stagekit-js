'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2961",
  name: "Replace \"I\" with \"k\"",
  description: "Replaces every I with k.",
  run: (value) => String(value).split("I").join("k"),
});
