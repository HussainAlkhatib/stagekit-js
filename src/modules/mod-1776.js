'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1776",
  name: "Replace \"o\" with \"U\"",
  description: "Replaces every o with U.",
  run: (value) => String(value).split("o").join("U"),
});
