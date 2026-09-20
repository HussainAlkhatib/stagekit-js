'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3609",
  name: "Replace \"S\" with \"X\"",
  description: "Replaces every S with X.",
  run: (value) => String(value).split("S").join("X"),
});
