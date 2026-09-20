'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0311",
  name: "Replace \"a\" with \"F\"",
  description: "Replaces every a with F.",
  run: (value) => String(value).split("a").join("F"),
});
