'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2599",
  name: "Replace \"C\" with \"o\"",
  description: "Replaces every C with o.",
  run: (value) => String(value).split("C").join("o"),
});
