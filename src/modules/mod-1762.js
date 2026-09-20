'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1762",
  name: "Replace \"o\" with \"G\"",
  description: "Replaces every o with G.",
  run: (value) => String(value).split("o").join("G"),
});
