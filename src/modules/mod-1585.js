'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1585",
  name: "Replace \"l\" with \"M\"",
  description: "Replaces every l with M.",
  run: (value) => String(value).split("l").join("M"),
});
