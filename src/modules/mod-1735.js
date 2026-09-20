'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1735",
  name: "Replace \"o\" with \"e\"",
  description: "Replaces every o with e.",
  run: (value) => String(value).split("o").join("e"),
});
