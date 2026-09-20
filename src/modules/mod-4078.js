'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4078",
  name: "Replace \"0\" with \"D\"",
  description: "Replaces every 0 with D.",
  run: (value) => String(value).split("0").join("D"),
});
