'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4383",
  name: "Replace \"5\" with \"D\"",
  description: "Replaces every 5 with D.",
  run: (value) => String(value).split("5").join("D"),
});
