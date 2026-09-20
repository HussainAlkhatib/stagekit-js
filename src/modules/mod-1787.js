'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1787",
  name: "Replace \"o\" with \"5\"",
  description: "Replaces every o with 5.",
  run: (value) => String(value).split("o").join("5"),
});
