'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3319",
  name: "Replace \"O\" with \"c\"",
  description: "Replaces every O with c.",
  run: (value) => String(value).split("O").join("c"),
});
