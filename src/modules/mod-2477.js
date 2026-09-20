'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2477",
  name: "Replace \"A\" with \"o\"",
  description: "Replaces every A with o.",
  run: (value) => String(value).split("A").join("o"),
});
