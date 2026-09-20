'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1740",
  name: "Replace \"o\" with \"j\"",
  description: "Replaces every o with j.",
  run: (value) => String(value).split("o").join("j"),
});
