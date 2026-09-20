'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1743",
  name: "Replace \"o\" with \"m\"",
  description: "Replaces every o with m.",
  run: (value) => String(value).split("o").join("m"),
});
