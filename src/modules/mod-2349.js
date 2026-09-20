'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2349",
  name: "Replace \"y\" with \"i\"",
  description: "Replaces every y with i.",
  run: (value) => String(value).split("y").join("i"),
});
