'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2581",
  name: "Replace \"B\" with \"6\"",
  description: "Replaces every B with 6.",
  run: (value) => String(value).split("B").join("6"),
});
