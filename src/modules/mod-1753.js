'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1753",
  name: "Replace \"o\" with \"x\"",
  description: "Replaces every o with x.",
  run: (value) => String(value).split("o").join("x"),
});
