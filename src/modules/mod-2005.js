'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2005",
  name: "Replace \"s\" with \"F\"",
  description: "Replaces every s with F.",
  run: (value) => String(value).split("s").join("F"),
});
