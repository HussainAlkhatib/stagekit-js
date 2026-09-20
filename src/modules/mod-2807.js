'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2807",
  name: "Replace \"F\" with \"O\"",
  description: "Replaces every F with O.",
  run: (value) => String(value).split("F").join("O"),
});
