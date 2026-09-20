'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4026",
  name: "Replace \"Z\" with \"M\"",
  description: "Replaces every Z with M.",
  run: (value) => String(value).split("Z").join("M"),
});
