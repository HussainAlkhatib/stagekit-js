'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3724",
  name: "Replace \"U\" with \"P\"",
  description: "Replaces every U with P.",
  run: (value) => String(value).split("U").join("P"),
});
