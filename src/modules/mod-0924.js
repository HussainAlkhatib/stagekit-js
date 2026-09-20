'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0924",
  name: "Replace \"d\" with \"F\"",
  description: "Replaces every d with F.",
  run: (value) => String(value).split("d").join("F"),
});
