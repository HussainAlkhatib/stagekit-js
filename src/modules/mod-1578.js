'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1578",
  name: "Replace \"l\" with \"F\"",
  description: "Replaces every l with F.",
  run: (value) => String(value).split("l").join("F"),
});
