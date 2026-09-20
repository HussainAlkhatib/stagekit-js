'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3197",
  name: "Replace \"M\" with \"c\"",
  description: "Replaces every M with c.",
  run: (value) => String(value).split("M").join("c"),
});
