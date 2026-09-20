'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3630",
  name: "Replace \"T\" with \"i\"",
  description: "Replaces every T with i.",
  run: (value) => String(value).split("T").join("i"),
});
