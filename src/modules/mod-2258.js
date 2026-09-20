'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2258",
  name: "Replace \"w\" with \"O\"",
  description: "Replaces every w with O.",
  run: (value) => String(value).split("w").join("O"),
});
