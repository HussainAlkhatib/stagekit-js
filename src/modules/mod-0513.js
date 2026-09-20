'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0513",
  name: "Replace \"b\" with \"r\"",
  description: "Replaces every b with r.",
  run: (value) => String(value).split("b").join("r"),
});
