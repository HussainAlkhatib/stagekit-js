'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3386",
  name: "Replace \"P\" with \"i\"",
  description: "Replaces every P with i.",
  run: (value) => String(value).split("P").join("i"),
});
