'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2288",
  name: "Replace \"x\" with \"i\"",
  description: "Replaces every x with i.",
  run: (value) => String(value).split("x").join("i"),
});
