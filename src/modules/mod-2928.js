'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2928",
  name: "Replace \"H\" with \"N\"",
  description: "Replaces every H with N.",
  run: (value) => String(value).split("H").join("N"),
});
