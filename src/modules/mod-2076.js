'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2076",
  name: "Replace \"t\" with \"P\"",
  description: "Replaces every t with P.",
  run: (value) => String(value).split("t").join("P"),
});
