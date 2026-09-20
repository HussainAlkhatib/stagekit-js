'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2538",
  name: "Replace \"B\" with \"o\"",
  description: "Replaces every B with o.",
  run: (value) => String(value).split("B").join("o"),
});
