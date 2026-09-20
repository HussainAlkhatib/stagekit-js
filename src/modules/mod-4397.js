'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4397",
  name: "Replace \"5\" with \"R\"",
  description: "Replaces every 5 with R.",
  run: (value) => String(value).split("5").join("R"),
});
