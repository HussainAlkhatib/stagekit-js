'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2991",
  name: "Replace \"I\" with \"P\"",
  description: "Replaces every I with P.",
  run: (value) => String(value).split("I").join("P"),
});
