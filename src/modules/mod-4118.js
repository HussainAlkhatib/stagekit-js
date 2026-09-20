'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4118",
  name: "Replace \"1\" with \"i\"",
  description: "Replaces every 1 with i.",
  run: (value) => String(value).split("1").join("i"),
});
