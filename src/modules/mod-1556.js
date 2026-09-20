'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1556",
  name: "Replace \"l\" with \"i\"",
  description: "Replaces every l with i.",
  run: (value) => String(value).split("l").join("i"),
});
