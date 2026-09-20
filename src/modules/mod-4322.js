'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4322",
  name: "Replace \"4\" with \"D\"",
  description: "Replaces every 4 with D.",
  run: (value) => String(value).split("4").join("D"),
});
