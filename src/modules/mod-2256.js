'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2256",
  name: "Replace \"w\" with \"M\"",
  description: "Replaces every w with M.",
  run: (value) => String(value).split("w").join("M"),
});
