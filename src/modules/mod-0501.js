'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0501",
  name: "Replace \"b\" with \"o\"",
  description: "Replaces every b with o.",
  run: (value) => String(value).split("b").join("o"),
});
