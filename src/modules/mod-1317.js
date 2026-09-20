'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1317",
  name: "Replace \"h\" with \"o\"",
  description: "Replaces every h with o.",
  run: (value) => String(value).split("h").join("o"),
});
