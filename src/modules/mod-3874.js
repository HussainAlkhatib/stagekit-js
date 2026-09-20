'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3874",
  name: "Replace \"X\" with \"i\"",
  description: "Replaces every X with i.",
  run: (value) => String(value).split("X").join("i"),
});
