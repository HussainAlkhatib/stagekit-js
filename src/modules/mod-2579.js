'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2579",
  name: "Replace \"B\" with \"4\"",
  description: "Replaces every B with 4.",
  run: (value) => String(value).split("B").join("4"),
});
