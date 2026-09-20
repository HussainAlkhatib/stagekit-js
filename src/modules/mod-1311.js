'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1311",
  name: "Replace \"h\" with \"i\"",
  description: "Replaces every h with i.",
  run: (value) => String(value).split("h").join("i"),
});
