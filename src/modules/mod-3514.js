'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3514",
  name: "Replace \"R\" with \"o\"",
  description: "Replaces every R with o.",
  run: (value) => String(value).split("R").join("o"),
});
