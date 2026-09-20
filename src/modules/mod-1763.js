'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1763",
  name: "Replace \"o\" with \"H\"",
  description: "Replaces every o with H.",
  run: (value) => String(value).split("o").join("H"),
});
