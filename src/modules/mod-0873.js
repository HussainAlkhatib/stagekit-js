'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0873",
  name: "Replace \"d\" with \"o\"",
  description: "Replaces every d with o.",
  run: (value) => String(value).split("d").join("o"),
});
