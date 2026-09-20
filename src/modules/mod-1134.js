'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1134",
  name: "Replace \"e\" with \"O\"",
  description: "Replaces every e with O.",
  run: (value) => String(value).split("e").join("O"),
});
