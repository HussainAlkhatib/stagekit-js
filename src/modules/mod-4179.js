'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4179",
  name: "Replace \"2\" with \"i\"",
  description: "Replaces every 2 with i.",
  run: (value) => String(value).split("2").join("i"),
});
