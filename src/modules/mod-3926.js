'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3926",
  name: "Replace \"X\" with \"9\"",
  description: "Replaces every X with 9.",
  run: (value) => String(value).split("X").join("9"),
});
