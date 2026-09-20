'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0579",
  name: "Replace \"b\" with \"M\"",
  description: "Replaces every b with M.",
  run: (value) => String(value).split("b").join("M"),
});
