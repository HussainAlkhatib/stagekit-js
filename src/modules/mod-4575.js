'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4575",
  name: "Replace \"8\" with \"M\"",
  description: "Replaces every 8 with M.",
  run: (value) => String(value).split("8").join("M"),
});
