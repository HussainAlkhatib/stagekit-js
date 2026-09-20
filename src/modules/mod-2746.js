'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2746",
  name: "Replace \"E\" with \"O\"",
  description: "Replaces every E with O.",
  run: (value) => String(value).split("E").join("O"),
});
