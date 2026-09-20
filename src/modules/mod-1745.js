'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1745",
  name: "Replace \"o\" with \"p\"",
  description: "Replaces every o with p.",
  run: (value) => String(value).split("o").join("p"),
});
