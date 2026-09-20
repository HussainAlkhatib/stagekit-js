'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1649",
  name: "Replace \"m\" with \"P\"",
  description: "Replaces every m with P.",
  run: (value) => String(value).split("m").join("P"),
});
