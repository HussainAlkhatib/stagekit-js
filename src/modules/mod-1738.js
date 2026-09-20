'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1738",
  name: "Replace \"o\" with \"h\"",
  description: "Replaces every o with h.",
  run: (value) => String(value).split("o").join("h"),
});
