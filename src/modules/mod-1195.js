'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1195",
  name: "Replace \"f\" with \"o\"",
  description: "Replaces every f with o.",
  run: (value) => String(value).split("f").join("o"),
});
