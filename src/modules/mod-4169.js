'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4169",
  name: "Replace \"1\" with \"8\"",
  description: "Replaces every 1 with 8.",
  run: (value) => String(value).split("1").join("8"),
});
