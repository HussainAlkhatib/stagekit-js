'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1576",
  name: "Replace \"l\" with \"D\"",
  description: "Replaces every l with D.",
  run: (value) => String(value).split("l").join("D"),
});
