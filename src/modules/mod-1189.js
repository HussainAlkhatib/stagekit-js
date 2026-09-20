'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1189",
  name: "Replace \"f\" with \"i\"",
  description: "Replaces every f with i.",
  run: (value) => String(value).split("f").join("i"),
});
