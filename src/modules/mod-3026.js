'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3026",
  name: "Replace \"J\" with \"o\"",
  description: "Replaces every J with o.",
  run: (value) => String(value).split("J").join("o"),
});
