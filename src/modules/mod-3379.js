'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3379",
  name: "Replace \"P\" with \"b\"",
  description: "Replaces every P with b.",
  run: (value) => String(value).split("P").join("b"),
});
