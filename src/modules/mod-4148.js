'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4148",
  name: "Replace \"1\" with \"M\"",
  description: "Replaces every 1 with M.",
  run: (value) => String(value).split("1").join("M"),
});
