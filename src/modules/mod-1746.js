'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1746",
  name: "Replace \"o\" with \"q\"",
  description: "Replaces every o with q.",
  run: (value) => String(value).split("o").join("q"),
});
