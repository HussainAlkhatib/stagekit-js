'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4017",
  name: "Replace \"Z\" with \"D\"",
  description: "Replaces every Z with D.",
  run: (value) => String(value).split("Z").join("D"),
});
