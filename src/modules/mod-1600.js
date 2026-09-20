'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1600",
  name: "Replace \"l\" with \"1\"",
  description: "Replaces every l with 1.",
  run: (value) => String(value).split("l").join("1"),
});
