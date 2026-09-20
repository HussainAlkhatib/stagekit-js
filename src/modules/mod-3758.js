'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3758",
  name: "Replace \"V\" with \"o\"",
  description: "Replaces every V with o.",
  run: (value) => String(value).split("V").join("o"),
});
