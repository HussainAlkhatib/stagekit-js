'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4307",
  name: "Replace \"4\" with \"o\"",
  description: "Replaces every 4 with o.",
  run: (value) => String(value).split("4").join("o"),
});
