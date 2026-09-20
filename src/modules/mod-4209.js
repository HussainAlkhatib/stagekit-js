'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4209",
  name: "Replace \"2\" with \"M\"",
  description: "Replaces every 2 with M.",
  run: (value) => String(value).split("2").join("M"),
});
