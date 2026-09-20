'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1056",
  name: "Replace \"e\" with \"o\"",
  description: "Replaces every e with o.",
  run: (value) => String(value).split("e").join("o"),
});
