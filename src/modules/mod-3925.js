'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3925",
  name: "Replace \"X\" with \"8\"",
  description: "Replaces every X with 8.",
  run: (value) => String(value).split("X").join("8"),
});
