'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4200",
  name: "Replace \"2\" with \"D\"",
  description: "Replaces every 2 with D.",
  run: (value) => String(value).split("2").join("D"),
});
