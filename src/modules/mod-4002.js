'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4002",
  name: "Replace \"Z\" with \"o\"",
  description: "Replaces every Z with o.",
  run: (value) => String(value).split("Z").join("o"),
});
