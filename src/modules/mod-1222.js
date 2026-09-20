'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1222",
  name: "Replace \"f\" with \"P\"",
  description: "Replaces every f with P.",
  run: (value) => String(value).split("f").join("P"),
});
