'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3639",
  name: "Replace \"T\" with \"r\"",
  description: "Replaces every T with r.",
  run: (value) => String(value).split("T").join("r"),
});
