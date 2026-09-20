'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0413",
  name: "Replace \"a\" with \"1\"",
  description: "Replaces every a with 1.",
  run: (value) => String(value).split("a").join("1"),
});
