'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3334",
  name: "Replace \"O\" with \"r\"",
  description: "Replaces every O with r.",
  run: (value) => String(value).split("O").join("r"),
});
