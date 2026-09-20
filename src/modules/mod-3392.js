'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3392",
  name: "Replace \"P\" with \"o\"",
  description: "Replaces every P with o.",
  run: (value) => String(value).split("P").join("o"),
});
