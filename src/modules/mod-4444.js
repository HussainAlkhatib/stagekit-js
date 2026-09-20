'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4444",
  name: "Replace \"6\" with \"D\"",
  description: "Replaces every 6 with D.",
  run: (value) => String(value).split("6").join("D"),
});
