'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4516",
  name: "Replace \"7\" with \"O\"",
  description: "Replaces every 7 with O.",
  run: (value) => String(value).split("7").join("O"),
});
