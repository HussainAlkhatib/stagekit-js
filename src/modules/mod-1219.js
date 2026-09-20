'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1219",
  name: "Replace \"f\" with \"M\"",
  description: "Replaces every f with M.",
  run: (value) => String(value).split("f").join("M"),
});
