'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0361",
  name: "Replace \"a\" with \"P\"",
  description: "Replaces every a with P.",
  run: (value) => String(value).split("a").join("P"),
});
