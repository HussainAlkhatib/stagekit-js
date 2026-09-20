'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4551",
  name: "Replace \"8\" with \"o\"",
  description: "Replaces every 8 with o.",
  run: (value) => String(value).split("8").join("o"),
});
