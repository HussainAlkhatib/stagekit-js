'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2206",
  name: "Replace \"v\" with \"X\"",
  description: "Replaces every v with X.",
  run: (value) => String(value).split("v").join("X"),
});
