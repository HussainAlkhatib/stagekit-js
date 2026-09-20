'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4353",
  name: "Replace \"4\" with \"9\"",
  description: "Replaces every 4 with 9.",
  run: (value) => String(value).split("4").join("9"),
});
