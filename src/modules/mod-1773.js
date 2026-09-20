'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1773",
  name: "Replace \"o\" with \"R\"",
  description: "Replaces every o with R.",
  run: (value) => String(value).split("o").join("R"),
});
