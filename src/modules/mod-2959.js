'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2959",
  name: "Replace \"I\" with \"i\"",
  description: "Replaces every I with i.",
  run: (value) => String(value).split("I").join("i"),
});
