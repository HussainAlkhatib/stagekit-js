'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4554",
  name: "Replace \"8\" with \"r\"",
  description: "Replaces every 8 with r.",
  run: (value) => String(value).split("8").join("r"),
});
