'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1775",
  name: "Replace \"o\" with \"T\"",
  description: "Replaces every o with T.",
  run: (value) => String(value).split("o").join("T"),
});
