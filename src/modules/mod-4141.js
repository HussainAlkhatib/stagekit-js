'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4141",
  name: "Replace \"1\" with \"F\"",
  description: "Replaces every 1 with F.",
  run: (value) => String(value).split("1").join("F"),
});
