'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4414",
  name: "Replace \"5\" with \"9\"",
  description: "Replaces every 5 with 9.",
  run: (value) => String(value).split("5").join("9"),
});
