'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3270",
  name: "Replace \"N\" with \"o\"",
  description: "Replaces every N with o.",
  run: (value) => String(value).split("N").join("o"),
});
