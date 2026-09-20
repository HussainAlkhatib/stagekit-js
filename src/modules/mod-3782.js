'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3782",
  name: "Replace \"V\" with \"M\"",
  description: "Replaces every V with M.",
  run: (value) => String(value).split("V").join("M"),
});
