'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1038",
  name: "Replace \"e\" with \"i\"",
  description: "Replaces every e with i.",
  run: (value) => String(value).split("e").join("i"),
});
