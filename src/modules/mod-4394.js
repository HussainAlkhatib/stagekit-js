'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4394",
  name: "Replace \"5\" with \"O\"",
  description: "Replaces every 5 with O.",
  run: (value) => String(value).split("5").join("O"),
});
