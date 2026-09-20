'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4301",
  name: "Replace \"4\" with \"i\"",
  description: "Replaces every 4 with i.",
  run: (value) => String(value).split("4").join("i"),
});
