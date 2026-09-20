'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4037",
  name: "Replace \"Z\" with \"X\"",
  description: "Replaces every Z with X.",
  run: (value) => String(value).split("Z").join("X"),
});
