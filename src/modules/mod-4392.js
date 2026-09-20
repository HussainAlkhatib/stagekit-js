'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4392",
  name: "Replace \"5\" with \"M\"",
  description: "Replaces every 5 with M.",
  run: (value) => String(value).split("5").join("M"),
});
