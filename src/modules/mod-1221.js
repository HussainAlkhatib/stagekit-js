'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1221",
  name: "Replace \"f\" with \"O\"",
  description: "Replaces every f with O.",
  run: (value) => String(value).split("f").join("O"),
});
