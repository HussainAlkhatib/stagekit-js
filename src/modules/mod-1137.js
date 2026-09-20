'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1137",
  name: "Replace \"e\" with \"P\"",
  description: "Replaces every e with P.",
  run: (value) => String(value).split("e").join("P"),
});
