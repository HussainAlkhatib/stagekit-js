'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1780",
  name: "Replace \"o\" with \"Y\"",
  description: "Replaces every o with Y.",
  run: (value) => String(value).split("o").join("Y"),
});
