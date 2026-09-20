'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2561",
  name: "Replace \"B\" with \"M\"",
  description: "Replaces every B with M.",
  run: (value) => String(value).split("B").join("M"),
});
