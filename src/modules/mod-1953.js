'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1953",
  name: "Replace \"r\" with \"O\"",
  description: "Replaces every r with O.",
  run: (value) => String(value).split("r").join("O"),
});
