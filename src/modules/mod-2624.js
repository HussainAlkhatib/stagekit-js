'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2624",
  name: "Replace \"C\" with \"O\"",
  description: "Replaces every C with O.",
  run: (value) => String(value).split("C").join("O"),
});
