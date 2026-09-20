'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2503",
  name: "Replace \"A\" with \"P\"",
  description: "Replaces every A with P.",
  run: (value) => String(value).split("A").join("P"),
});
