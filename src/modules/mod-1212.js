'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1212",
  name: "Replace \"f\" with \"F\"",
  description: "Replaces every f with F.",
  run: (value) => String(value).split("f").join("F"),
});
