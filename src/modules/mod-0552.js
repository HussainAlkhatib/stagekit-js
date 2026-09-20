'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0552",
  name: "Replace \"b\" with \"D\"",
  description: "Replaces every b with D.",
  run: (value) => String(value).split("b").join("D"),
});
