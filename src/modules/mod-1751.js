'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1751",
  name: "Replace \"o\" with \"v\"",
  description: "Replaces every o with v.",
  run: (value) => String(value).split("o").join("v"),
});
