'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1474",
  name: "Replace \"j\" with \"X\"",
  description: "Replaces every j with X.",
  run: (value) => String(value).split("j").join("X"),
});
