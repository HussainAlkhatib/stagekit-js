'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4272",
  name: "Replace \"3\" with \"O\"",
  description: "Replaces every 3 with O.",
  run: (value) => String(value).split("3").join("O"),
});
