'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2198",
  name: "Replace \"v\" with \"P\"",
  description: "Replaces every v with P.",
  run: (value) => String(value).split("v").join("P"),
});
