'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2552",
  name: "Replace \"B\" with \"D\"",
  description: "Replaces every B with D.",
  run: (value) => String(value).split("B").join("D"),
});
