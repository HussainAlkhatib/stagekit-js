'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3653",
  name: "Replace \"T\" with \"F\"",
  description: "Replaces every T with F.",
  run: (value) => String(value).split("T").join("F"),
});
