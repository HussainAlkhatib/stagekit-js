'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1768",
  name: "Replace \"o\" with \"M\"",
  description: "Replaces every o with M.",
  run: (value) => String(value).split("o").join("M"),
});
