'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1767",
  name: "Replace \"o\" with \"L\"",
  description: "Replaces every o with L.",
  run: (value) => String(value).split("o").join("L"),
});
