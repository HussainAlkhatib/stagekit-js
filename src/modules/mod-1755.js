'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1755",
  name: "Replace \"o\" with \"z\"",
  description: "Replaces every o with z.",
  run: (value) => String(value).split("o").join("z"),
});
