'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1378",
  name: "Replace \"i\" with \"o\"",
  description: "Replaces every i with o.",
  run: (value) => String(value).split("i").join("o"),
});
