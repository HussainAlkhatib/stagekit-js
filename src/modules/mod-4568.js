'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4568",
  name: "Replace \"8\" with \"F\"",
  description: "Replaces every 8 with F.",
  run: (value) => String(value).split("8").join("F"),
});
