'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2843",
  name: "Replace \"G\" with \"o\"",
  description: "Replaces every G with o.",
  run: (value) => String(value).split("G").join("o"),
});
