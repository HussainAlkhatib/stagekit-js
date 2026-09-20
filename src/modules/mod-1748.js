'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1748",
  name: "Replace \"o\" with \"s\"",
  description: "Replaces every o with s.",
  run: (value) => String(value).split("o").join("s"),
});
