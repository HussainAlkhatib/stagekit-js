'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3294",
  name: "Replace \"N\" with \"M\"",
  description: "Replaces every N with M.",
  run: (value) => String(value).split("N").join("M"),
});
