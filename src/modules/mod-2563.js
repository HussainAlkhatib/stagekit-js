'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2563",
  name: "Replace \"B\" with \"O\"",
  description: "Replaces every B with O.",
  run: (value) => String(value).split("B").join("O"),
});
