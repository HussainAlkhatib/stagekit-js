'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3602",
  name: "Replace \"S\" with \"P\"",
  description: "Replaces every S with P.",
  run: (value) => String(value).split("S").join("P"),
});
