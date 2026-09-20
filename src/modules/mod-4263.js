'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4263",
  name: "Replace \"3\" with \"F\"",
  description: "Replaces every 3 with F.",
  run: (value) => String(value).split("3").join("F"),
});
