'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2556",
  name: "Replace \"B\" with \"H\"",
  description: "Replaces every B with H.",
  run: (value) => String(value).split("B").join("H"),
});
