'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3081",
  name: "Replace \"K\" with \"i\"",
  description: "Replaces every K with i.",
  run: (value) => String(value).split("K").join("i"),
});
