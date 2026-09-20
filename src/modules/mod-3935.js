'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3935",
  name: "Replace \"Y\" with \"i\"",
  description: "Replaces every Y with i.",
  run: (value) => String(value).split("Y").join("i"),
});
