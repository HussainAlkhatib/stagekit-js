'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2355",
  name: "Replace \"y\" with \"o\"",
  description: "Replaces every y with o.",
  run: (value) => String(value).split("y").join("o"),
});
