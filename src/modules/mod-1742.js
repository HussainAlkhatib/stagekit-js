'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1742",
  name: "Replace \"o\" with \"l\"",
  description: "Replaces every o with l.",
  run: (value) => String(value).split("o").join("l"),
});
