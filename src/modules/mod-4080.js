'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4080",
  name: "Replace \"0\" with \"F\"",
  description: "Replaces every 0 with F.",
  run: (value) => String(value).split("0").join("F"),
});
