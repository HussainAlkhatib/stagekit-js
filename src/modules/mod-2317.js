'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2317",
  name: "Replace \"x\" with \"M\"",
  description: "Replaces every x with M.",
  run: (value) => String(value).split("x").join("M"),
});
