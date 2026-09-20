'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1737",
  name: "Replace \"o\" with \"g\"",
  description: "Replaces every o with g.",
  run: (value) => String(value).split("o").join("g"),
});
