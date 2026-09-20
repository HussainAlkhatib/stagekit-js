'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2378",
  name: "Replace \"y\" with \"M\"",
  description: "Replaces every y with M.",
  run: (value) => String(value).split("y").join("M"),
});
