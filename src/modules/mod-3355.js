'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3355",
  name: "Replace \"O\" with \"M\"",
  description: "Replaces every O with M.",
  run: (value) => String(value).split("O").join("M"),
});
