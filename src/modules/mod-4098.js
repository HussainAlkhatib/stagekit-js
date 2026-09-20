'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4098",
  name: "Replace \"0\" with \"X\"",
  description: "Replaces every 0 with X.",
  run: (value) => String(value).split("0").join("X"),
});
