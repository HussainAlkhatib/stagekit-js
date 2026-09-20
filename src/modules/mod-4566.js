'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4566",
  name: "Replace \"8\" with \"D\"",
  description: "Replaces every 8 with D.",
  run: (value) => String(value).split("8").join("D"),
});
