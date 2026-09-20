'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3447",
  name: "Replace \"Q\" with \"i\"",
  description: "Replaces every Q with i.",
  run: (value) => String(value).split("Q").join("i"),
});
