'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1747",
  name: "Replace \"o\" with \"r\"",
  description: "Replaces every o with r.",
  run: (value) => String(value).split("o").join("r"),
});
