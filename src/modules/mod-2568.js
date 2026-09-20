'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2568",
  name: "Replace \"B\" with \"T\"",
  description: "Replaces every B with T.",
  run: (value) => String(value).split("B").join("T"),
});
