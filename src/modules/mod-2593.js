'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2593",
  name: "Replace \"C\" with \"i\"",
  description: "Replaces every C with i.",
  run: (value) => String(value).split("C").join("i"),
});
