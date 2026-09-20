'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1983",
  name: "Replace \"s\" with \"i\"",
  description: "Replaces every s with i.",
  run: (value) => String(value).split("s").join("i"),
});
