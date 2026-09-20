'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2869",
  name: "Replace \"G\" with \"P\"",
  description: "Replaces every G with P.",
  run: (value) => String(value).split("G").join("P"),
});
