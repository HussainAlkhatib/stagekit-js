'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1622",
  name: "Replace \"m\" with \"o\"",
  description: "Replaces every m with o.",
  run: (value) => String(value).split("m").join("o"),
});
