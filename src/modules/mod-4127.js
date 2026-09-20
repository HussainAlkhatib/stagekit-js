'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4127",
  name: "Replace \"1\" with \"r\"",
  description: "Replaces every 1 with r.",
  run: (value) => String(value).split("1").join("r"),
});
