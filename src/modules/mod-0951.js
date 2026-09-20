'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0951",
  name: "Replace \"d\" with \"O\"",
  description: "Replaces every d with O.",
  run: (value) => String(value).split("d").join("O"),
});
