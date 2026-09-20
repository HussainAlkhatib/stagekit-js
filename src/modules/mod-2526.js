'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2526",
  name: "Replace \"B\" with \"c\"",
  description: "Replaces every B with c.",
  run: (value) => String(value).split("B").join("c"),
});
