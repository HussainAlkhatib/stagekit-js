'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1772",
  name: "Replace \"o\" with \"Q\"",
  description: "Replaces every o with Q.",
  run: (value) => String(value).split("o").join("Q"),
});
