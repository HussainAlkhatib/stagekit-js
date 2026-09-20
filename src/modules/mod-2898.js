'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2898",
  name: "Replace \"H\" with \"i\"",
  description: "Replaces every H with i.",
  run: (value) => String(value).split("H").join("i"),
});
