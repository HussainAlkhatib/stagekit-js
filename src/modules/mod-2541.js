'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2541",
  name: "Replace \"B\" with \"r\"",
  description: "Replaces every B with r.",
  run: (value) => String(value).split("B").join("r"),
});
