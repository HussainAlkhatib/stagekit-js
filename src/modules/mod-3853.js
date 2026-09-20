'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3853",
  name: "Replace \"W\" with \"X\"",
  description: "Replaces every W with X.",
  run: (value) => String(value).split("W").join("X"),
});
