'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1250",
  name: "Replace \"g\" with \"i\"",
  description: "Replaces every g with i.",
  run: (value) => String(value).split("g").join("i"),
});
