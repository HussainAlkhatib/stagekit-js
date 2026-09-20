'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1989",
  name: "Replace \"s\" with \"o\"",
  description: "Replaces every s with o.",
  run: (value) => String(value).split("s").join("o"),
});
