'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1840",
  name: "Replace \"p\" with \"X\"",
  description: "Replaces every p with X.",
  run: (value) => String(value).split("p").join("X"),
});
