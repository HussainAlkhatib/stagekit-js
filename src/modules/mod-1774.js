'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1774",
  name: "Replace \"o\" with \"S\"",
  description: "Replaces every o with S.",
  run: (value) => String(value).split("o").join("S"),
});
