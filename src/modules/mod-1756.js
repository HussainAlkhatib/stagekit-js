'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1756",
  name: "Replace \"o\" with \"A\"",
  description: "Replaces every o with A.",
  run: (value) => String(value).split("o").join("A"),
});
