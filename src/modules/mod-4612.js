'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4612",
  name: "Replace \"9\" with \"o\"",
  description: "Replaces every 9 with o.",
  run: (value) => String(value).split("9").join("o"),
});
