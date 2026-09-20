'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2471",
  name: "Replace \"A\" with \"i\"",
  description: "Replaces every A with i.",
  run: (value) => String(value).split("A").join("i"),
});
