'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2523",
  name: "Replace \"A\" with \"9\"",
  description: "Replaces every A with 9.",
  run: (value) => String(value).split("A").join("9"),
});
