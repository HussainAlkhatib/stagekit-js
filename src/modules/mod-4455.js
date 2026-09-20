'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4455",
  name: "Replace \"6\" with \"O\"",
  description: "Replaces every 6 with O.",
  run: (value) => String(value).split("6").join("O"),
});
