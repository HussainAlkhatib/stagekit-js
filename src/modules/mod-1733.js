'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1733",
  name: "Replace \"o\" with \"c\"",
  description: "Replaces every o with c.",
  run: (value) => String(value).split("o").join("c"),
});
