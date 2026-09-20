'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1709",
  name: "Replace \"n\" with \"O\"",
  description: "Replaces every n with O.",
  run: (value) => String(value).split("n").join("O"),
});
