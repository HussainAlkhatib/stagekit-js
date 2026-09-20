'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2259",
  name: "Replace \"w\" with \"P\"",
  description: "Replaces every w with P.",
  run: (value) => String(value).split("w").join("P"),
});
