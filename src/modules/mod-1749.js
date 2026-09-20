'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1749",
  name: "Replace \"o\" with \"t\"",
  description: "Replaces every o with t.",
  run: (value) => String(value).split("o").join("t"),
});
