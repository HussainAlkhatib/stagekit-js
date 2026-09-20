'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3380",
  name: "Replace \"P\" with \"c\"",
  description: "Replaces every P with c.",
  run: (value) => String(value).split("P").join("c"),
});
