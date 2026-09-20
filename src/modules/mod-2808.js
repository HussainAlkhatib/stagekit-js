'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2808",
  name: "Replace \"F\" with \"P\"",
  description: "Replaces every F with P.",
  run: (value) => String(value).split("F").join("P"),
});
