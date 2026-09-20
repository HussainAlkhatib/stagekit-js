'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3264",
  name: "Replace \"N\" with \"i\"",
  description: "Replaces every N with i.",
  run: (value) => String(value).split("N").join("i"),
});
