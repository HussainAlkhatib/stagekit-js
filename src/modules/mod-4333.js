'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4333",
  name: "Replace \"4\" with \"O\"",
  description: "Replaces every 4 with O.",
  run: (value) => String(value).split("4").join("O"),
});
