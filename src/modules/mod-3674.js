'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3674",
  name: "Replace \"T\" with \"1\"",
  description: "Replaces every T with 1.",
  run: (value) => String(value).split("T").join("1"),
});
