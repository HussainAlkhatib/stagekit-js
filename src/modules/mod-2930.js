'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2930",
  name: "Replace \"H\" with \"P\"",
  description: "Replaces every H with P.",
  run: (value) => String(value).split("H").join("P"),
});
