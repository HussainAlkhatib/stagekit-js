'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1784",
  name: "Replace \"o\" with \"2\"",
  description: "Replaces every o with 2.",
  run: (value) => String(value).split("o").join("2"),
});
