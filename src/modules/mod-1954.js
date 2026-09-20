'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1954",
  name: "Replace \"r\" with \"P\"",
  description: "Replaces every r with P.",
  run: (value) => String(value).split("r").join("P"),
});
