'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2500",
  name: "Replace \"A\" with \"M\"",
  description: "Replaces every A with M.",
  run: (value) => String(value).split("A").join("M"),
});
