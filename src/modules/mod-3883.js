'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3883",
  name: "Replace \"X\" with \"r\"",
  description: "Replaces every X with r.",
  run: (value) => String(value).split("X").join("r"),
});
