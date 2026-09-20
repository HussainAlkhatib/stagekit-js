'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1741",
  name: "Replace \"o\" with \"k\"",
  description: "Replaces every o with k.",
  run: (value) => String(value).split("o").join("k"),
});
