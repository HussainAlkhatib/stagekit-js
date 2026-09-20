'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1781",
  name: "Replace \"o\" with \"Z\"",
  description: "Replaces every o with Z.",
  run: (value) => String(value).split("o").join("Z"),
});
