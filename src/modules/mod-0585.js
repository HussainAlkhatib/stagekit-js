'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0585",
  name: "Replace \"b\" with \"O\"",
  description: "Replaces every b with O.",
  run: (value) => String(value).split("b").join("O"),
});
