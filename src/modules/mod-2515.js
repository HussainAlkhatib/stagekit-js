'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2515",
  name: "Replace \"A\" with \"1\"",
  description: "Replaces every A with 1.",
  run: (value) => String(value).split("A").join("1"),
});
