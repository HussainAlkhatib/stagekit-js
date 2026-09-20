'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3976",
  name: "Replace \"Y\" with \"X\"",
  description: "Replaces every Y with X.",
  run: (value) => String(value).split("Y").join("X"),
});
