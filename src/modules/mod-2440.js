'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2440",
  name: "Replace \"z\" with \"N\"",
  description: "Replaces every z with N.",
  run: (value) => String(value).split("z").join("N"),
});
