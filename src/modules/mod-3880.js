'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3880",
  name: "Replace \"X\" with \"o\"",
  description: "Replaces every X with o.",
  run: (value) => String(value).split("X").join("o"),
});
