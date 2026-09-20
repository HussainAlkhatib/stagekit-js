'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2990",
  name: "Replace \"I\" with \"O\"",
  description: "Replaces every I with O.",
  run: (value) => String(value).split("I").join("O"),
});
