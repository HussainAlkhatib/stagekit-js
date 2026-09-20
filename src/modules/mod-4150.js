'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4150",
  name: "Replace \"1\" with \"O\"",
  description: "Replaces every 1 with O.",
  run: (value) => String(value).split("1").join("O"),
});
