'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3922",
  name: "Replace \"X\" with \"5\"",
  description: "Replaces every X with 5.",
  run: (value) => String(value).split("X").join("5"),
});
