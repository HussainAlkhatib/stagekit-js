'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1922",
  name: "Replace \"r\" with \"i\"",
  description: "Replaces every r with i.",
  run: (value) => String(value).split("r").join("i"),
});
