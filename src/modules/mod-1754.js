'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1754",
  name: "Replace \"o\" with \"y\"",
  description: "Replaces every o with y.",
  run: (value) => String(value).split("o").join("y"),
});
