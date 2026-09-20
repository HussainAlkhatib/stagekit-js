'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4514",
  name: "Replace \"7\" with \"M\"",
  description: "Replaces every 7 with M.",
  run: (value) => String(value).split("7").join("M"),
});
