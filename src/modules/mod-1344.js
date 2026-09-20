'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1344",
  name: "Replace \"h\" with \"P\"",
  description: "Replaces every h with P.",
  run: (value) => String(value).split("h").join("P"),
});
