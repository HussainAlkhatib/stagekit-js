'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3416",
  name: "Replace \"P\" with \"M\"",
  description: "Replaces every P with M.",
  run: (value) => String(value).split("P").join("M"),
});
