'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3209",
  name: "Replace \"M\" with \"o\"",
  description: "Replaces every M with o.",
  run: (value) => String(value).split("M").join("o"),
});
