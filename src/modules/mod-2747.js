'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2747",
  name: "Replace \"E\" with \"P\"",
  description: "Replaces every E with P.",
  run: (value) => String(value).split("E").join("P"),
});
