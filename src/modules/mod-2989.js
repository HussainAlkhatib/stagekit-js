'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2989",
  name: "Replace \"I\" with \"N\"",
  description: "Replaces every I with N.",
  run: (value) => String(value).split("I").join("N"),
});
