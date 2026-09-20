'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1550",
  name: "Replace \"l\" with \"c\"",
  description: "Replaces every l with c.",
  run: (value) => String(value).split("l").join("c"),
});
