'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4636",
  name: "Replace \"9\" with \"M\"",
  description: "Replaces every 9 with M.",
  run: (value) => String(value).split("9").join("M"),
});
