'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3906",
  name: "Replace \"X\" with \"O\"",
  description: "Replaces every X with O.",
  run: (value) => String(value).split("X").join("O"),
});
