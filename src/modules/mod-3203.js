'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3203",
  name: "Replace \"M\" with \"i\"",
  description: "Replaces every M with i.",
  run: (value) => String(value).split("M").join("i"),
});
