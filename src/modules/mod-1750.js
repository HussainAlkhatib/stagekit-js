'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1750",
  name: "Replace \"o\" with \"u\"",
  description: "Replaces every o with u.",
  run: (value) => String(value).split("o").join("u"),
});
