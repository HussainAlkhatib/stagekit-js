'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4324",
  name: "Replace \"4\" with \"F\"",
  description: "Replaces every 4 with F.",
  run: (value) => String(value).split("4").join("F"),
});
