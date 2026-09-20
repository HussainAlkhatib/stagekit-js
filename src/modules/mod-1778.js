'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1778",
  name: "Replace \"o\" with \"W\"",
  description: "Replaces every o with W.",
  run: (value) => String(value).split("o").join("W"),
});
