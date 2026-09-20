'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3636",
  name: "Replace \"T\" with \"o\"",
  description: "Replaces every T with o.",
  run: (value) => String(value).split("T").join("o"),
});
