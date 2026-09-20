'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2660",
  name: "Replace \"D\" with \"o\"",
  description: "Replaces every D with o.",
  run: (value) => String(value).split("D").join("o"),
});
