'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2927",
  name: "Replace \"H\" with \"M\"",
  description: "Replaces every H with M.",
  run: (value) => String(value).split("H").join("M"),
});
