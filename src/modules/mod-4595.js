'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4595",
  name: "Replace \"8\" with \"6\"",
  description: "Replaces every 8 with 6.",
  run: (value) => String(value).split("8").join("6"),
});
