'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3011",
  name: "Replace \"I\" with \"9\"",
  description: "Replaces every I with 9.",
  run: (value) => String(value).split("I").join("9"),
});
