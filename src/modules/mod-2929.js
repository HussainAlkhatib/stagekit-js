'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2929",
  name: "Replace \"H\" with \"O\"",
  description: "Replaces every H with O.",
  run: (value) => String(value).split("H").join("O"),
});
