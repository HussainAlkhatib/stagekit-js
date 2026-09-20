'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1752",
  name: "Replace \"o\" with \"w\"",
  description: "Replaces every o with w.",
  run: (value) => String(value).split("o").join("w"),
});
