'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4505",
  name: "Replace \"7\" with \"D\"",
  description: "Replaces every 7 with D.",
  run: (value) => String(value).split("7").join("D"),
});
