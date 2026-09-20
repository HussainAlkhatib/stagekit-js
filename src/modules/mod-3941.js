'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3941",
  name: "Replace \"Y\" with \"o\"",
  description: "Replaces every Y with o.",
  run: (value) => String(value).split("Y").join("o"),
});
