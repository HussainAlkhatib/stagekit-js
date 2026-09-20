'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2965",
  name: "Replace \"I\" with \"o\"",
  description: "Replaces every I with o.",
  run: (value) => String(value).split("I").join("o"),
});
