'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4330",
  name: "Replace \"4\" with \"L\"",
  description: "Replaces every 4 with L.",
  run: (value) => String(value).split("4").join("L"),
});
