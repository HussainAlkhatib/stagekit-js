'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4413",
  name: "Replace \"5\" with \"8\"",
  description: "Replaces every 5 with 8.",
  run: (value) => String(value).split("5").join("8"),
});
