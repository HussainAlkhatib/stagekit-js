'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1739",
  name: "Replace \"o\" with \"i\"",
  description: "Replaces every o with i.",
  run: (value) => String(value).split("o").join("i"),
});
