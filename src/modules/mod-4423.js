'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4423",
  name: "Replace \"6\" with \"i\"",
  description: "Replaces every 6 with i.",
  run: (value) => String(value).split("6").join("i"),
});
