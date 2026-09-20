'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4391",
  name: "Replace \"5\" with \"L\"",
  description: "Replaces every 5 with L.",
  run: (value) => String(value).split("5").join("L"),
});
