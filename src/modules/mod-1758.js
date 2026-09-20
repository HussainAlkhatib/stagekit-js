'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1758",
  name: "Replace \"o\" with \"C\"",
  description: "Replaces every o with C.",
  run: (value) => String(value).split("o").join("C"),
});
