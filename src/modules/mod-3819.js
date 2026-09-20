'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3819",
  name: "Replace \"W\" with \"o\"",
  description: "Replaces every W with o.",
  run: (value) => String(value).split("W").join("o"),
});
