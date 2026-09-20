'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4574",
  name: "Replace \"8\" with \"L\"",
  description: "Replaces every 8 with L.",
  run: (value) => String(value).split("8").join("L"),
});
