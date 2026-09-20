'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4048",
  name: "Replace \"Z\" with \"9\"",
  description: "Replaces every Z with 9.",
  run: (value) => String(value).split("Z").join("9"),
});
