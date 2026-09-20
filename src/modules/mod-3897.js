'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3897",
  name: "Replace \"X\" with \"F\"",
  description: "Replaces every X with F.",
  run: (value) => String(value).split("X").join("F"),
});
