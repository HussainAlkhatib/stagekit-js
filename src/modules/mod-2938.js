'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2938",
  name: "Replace \"H\" with \"X\"",
  description: "Replaces every H with X.",
  run: (value) => String(value).split("H").join("X"),
});
