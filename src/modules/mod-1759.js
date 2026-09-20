'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1759",
  name: "Replace \"o\" with \"D\"",
  description: "Replaces every o with D.",
  run: (value) => String(value).split("o").join("D"),
});
