'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3662",
  name: "Replace \"T\" with \"O\"",
  description: "Replaces every T with O.",
  run: (value) => String(value).split("T").join("O"),
});
