'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3350",
  name: "Replace \"O\" with \"H\"",
  description: "Replaces every O with H.",
  run: (value) => String(value).split("O").join("H"),
});
