'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0477",
  name: "Replace \"b\" with \"i\"",
  description: "Replaces every b with i.",
  run: (value) => String(value).split("b").join("i"),
});
