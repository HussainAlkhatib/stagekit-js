'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2136",
  name: "Replace \"u\" with \"O\"",
  description: "Replaces every u with O.",
  run: (value) => String(value).split("u").join("O"),
});
