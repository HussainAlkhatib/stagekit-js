'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1765",
  name: "Replace \"o\" with \"J\"",
  description: "Replaces every o with J.",
  run: (value) => String(value).split("o").join("J"),
});
