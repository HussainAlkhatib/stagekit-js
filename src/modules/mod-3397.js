'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3397",
  name: "Replace \"P\" with \"t\"",
  description: "Replaces every P with t.",
  run: (value) => String(value).split("P").join("t"),
});
