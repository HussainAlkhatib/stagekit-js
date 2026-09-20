'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1928",
  name: "Replace \"r\" with \"o\"",
  description: "Replaces every r with o.",
  run: (value) => String(value).split("r").join("o"),
});
