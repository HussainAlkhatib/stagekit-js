'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4513",
  name: "Replace \"7\" with \"L\"",
  description: "Replaces every 7 with L.",
  run: (value) => String(value).split("7").join("L"),
});
