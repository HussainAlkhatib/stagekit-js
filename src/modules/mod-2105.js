'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2105",
  name: "Replace \"u\" with \"i\"",
  description: "Replaces every u with i.",
  run: (value) => String(value).split("u").join("i"),
});
