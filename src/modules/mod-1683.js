'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1683",
  name: "Replace \"n\" with \"o\"",
  description: "Replaces every n with o.",
  run: (value) => String(value).split("n").join("o"),
});
