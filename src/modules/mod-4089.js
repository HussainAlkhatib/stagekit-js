'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4089",
  name: "Replace \"0\" with \"O\"",
  description: "Replaces every 0 with O.",
  run: (value) => String(value).split("0").join("O"),
});
