'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3331",
  name: "Replace \"O\" with \"o\"",
  description: "Replaces every O with o.",
  run: (value) => String(value).split("O").join("o"),
});
