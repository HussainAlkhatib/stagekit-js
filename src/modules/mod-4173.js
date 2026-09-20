'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4173",
  name: "Replace \"2\" with \"c\"",
  description: "Replaces every 2 with c.",
  run: (value) => String(value).split("2").join("c"),
});
