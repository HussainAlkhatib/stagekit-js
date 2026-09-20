'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2502",
  name: "Replace \"A\" with \"O\"",
  description: "Replaces every A with O.",
  run: (value) => String(value).split("A").join("O"),
});
