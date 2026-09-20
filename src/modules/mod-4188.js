'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4188",
  name: "Replace \"2\" with \"r\"",
  description: "Replaces every 2 with r.",
  run: (value) => String(value).split("2").join("r"),
});
