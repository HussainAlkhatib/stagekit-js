'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0445",
  name: "Replace \"a\" with \"9\"",
  description: "Replaces every a with 9.",
  run: (value) => String(value).split("a").join("9"),
});
