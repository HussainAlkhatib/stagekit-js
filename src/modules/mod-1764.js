'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1764",
  name: "Replace \"o\" with \"I\"",
  description: "Replaces every o with I.",
  run: (value) => String(value).split("o").join("I"),
});
