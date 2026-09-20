'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4185",
  name: "Replace \"2\" with \"o\"",
  description: "Replaces every 2 with o.",
  run: (value) => String(value).split("2").join("o"),
});
