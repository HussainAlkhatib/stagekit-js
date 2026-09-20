'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1785",
  name: "Replace \"o\" with \"3\"",
  description: "Replaces every o with 3.",
  run: (value) => String(value).split("o").join("3"),
});
