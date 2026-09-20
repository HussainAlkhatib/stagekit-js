'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2511",
  name: "Replace \"A\" with \"X\"",
  description: "Replaces every A with X.",
  run: (value) => String(value).split("A").join("X"),
});
