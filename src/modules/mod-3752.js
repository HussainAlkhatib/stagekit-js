'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3752",
  name: "Replace \"V\" with \"i\"",
  description: "Replaces every V with i.",
  run: (value) => String(value).split("V").join("i"),
});
