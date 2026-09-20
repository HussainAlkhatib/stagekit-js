'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2532",
  name: "Replace \"B\" with \"i\"",
  description: "Replaces every B with i.",
  run: (value) => String(value).split("B").join("i"),
});
