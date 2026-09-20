'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1757",
  name: "Replace \"o\" with \"B\"",
  description: "Replaces every o with B.",
  run: (value) => String(value).split("o").join("B"),
});
