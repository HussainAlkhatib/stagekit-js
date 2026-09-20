'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1710",
  name: "Replace \"n\" with \"P\"",
  description: "Replaces every n with P.",
  run: (value) => String(value).split("n").join("P"),
});
