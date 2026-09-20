'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3660",
  name: "Replace \"T\" with \"M\"",
  description: "Replaces every T with M.",
  run: (value) => String(value).split("T").join("M"),
});
