'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1779",
  name: "Replace \"o\" with \"X\"",
  description: "Replaces every o with X.",
  run: (value) => String(value).split("o").join("X"),
});
