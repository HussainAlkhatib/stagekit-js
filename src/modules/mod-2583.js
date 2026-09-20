'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2583",
  name: "Replace \"B\" with \"8\"",
  description: "Replaces every B with 8.",
  run: (value) => String(value).split("B").join("8"),
});
