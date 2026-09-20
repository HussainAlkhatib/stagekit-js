'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2450",
  name: "Replace \"z\" with \"X\"",
  description: "Replaces every z with X.",
  run: (value) => String(value).split("z").join("X"),
});
