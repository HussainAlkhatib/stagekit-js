'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3453",
  name: "Replace \"Q\" with \"o\"",
  description: "Replaces every Q with o.",
  run: (value) => String(value).split("Q").join("o"),
});
