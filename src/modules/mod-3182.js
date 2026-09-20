'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3182",
  name: "Replace \"L\" with \"X\"",
  description: "Replaces every L with X.",
  run: (value) => String(value).split("L").join("X"),
});
