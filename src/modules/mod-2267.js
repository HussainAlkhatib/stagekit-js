'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2267",
  name: "Replace \"w\" with \"X\"",
  description: "Replaces every w with X.",
  run: (value) => String(value).split("w").join("X"),
});
