'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1561",
  name: "Replace \"l\" with \"o\"",
  description: "Replaces every l with o.",
  run: (value) => String(value).split("l").join("o"),
});
