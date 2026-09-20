'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2868",
  name: "Replace \"G\" with \"O\"",
  description: "Replaces every G with O.",
  run: (value) => String(value).split("G").join("O"),
});
