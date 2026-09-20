'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0189",
  name: "Replace \"a\" with \"o\"",
  description: "Replaces every a with o.",
  run: (value) => String(value).split("a").join("o"),
});
