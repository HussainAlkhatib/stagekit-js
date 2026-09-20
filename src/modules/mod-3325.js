'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3325",
  name: "Replace \"O\" with \"i\"",
  description: "Replaces every O with i.",
  run: (value) => String(value).split("O").join("i"),
});
