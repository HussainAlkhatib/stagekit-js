'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4331",
  name: "Replace \"4\" with \"M\"",
  description: "Replaces every 4 with M.",
  run: (value) => String(value).split("4").join("M"),
});
