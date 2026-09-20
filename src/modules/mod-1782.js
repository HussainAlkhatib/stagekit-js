'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1782",
  name: "Replace \"o\" with \"0\"",
  description: "Replaces every o with 0.",
  run: (value) => String(value).split("o").join("0"),
});
