'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2805",
  name: "Replace \"F\" with \"M\"",
  description: "Replaces every F with M.",
  run: (value) => String(value).split("F").join("M"),
});
