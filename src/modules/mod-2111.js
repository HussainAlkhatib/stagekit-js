'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2111",
  name: "Replace \"u\" with \"o\"",
  description: "Replaces every u with o.",
  run: (value) => String(value).split("u").join("o"),
});
