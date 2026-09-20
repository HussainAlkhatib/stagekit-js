'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4029",
  name: "Replace \"Z\" with \"P\"",
  description: "Replaces every Z with P.",
  run: (value) => String(value).split("Z").join("P"),
});
