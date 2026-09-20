'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2775",
  name: "Replace \"F\" with \"h\"",
  description: "Replaces every F with h.",
  run: (value) => String(value).split("F").join("h"),
});
