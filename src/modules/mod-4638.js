'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4638",
  name: "Replace \"9\" with \"O\"",
  description: "Replaces every 9 with O.",
  run: (value) => String(value).split("9").join("O"),
});
