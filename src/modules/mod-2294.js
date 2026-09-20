'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2294",
  name: "Replace \"x\" with \"o\"",
  description: "Replaces every x with o.",
  run: (value) => String(value).split("x").join("o"),
});
