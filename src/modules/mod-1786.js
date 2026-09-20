'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1786",
  name: "Replace \"o\" with \"4\"",
  description: "Replaces every o with 4.",
  run: (value) => String(value).split("o").join("4"),
});
