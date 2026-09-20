'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2560",
  name: "Replace \"B\" with \"L\"",
  description: "Replaces every B with L.",
  run: (value) => String(value).split("B").join("L"),
});
