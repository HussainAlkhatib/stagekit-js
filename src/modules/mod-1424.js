'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1424",
  name: "Replace \"i\" with \"8\"",
  description: "Replaces every i with 8.",
  run: (value) => String(value).split("i").join("8"),
});
