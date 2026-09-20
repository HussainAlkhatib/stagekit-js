'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2012",
  name: "Replace \"s\" with \"M\"",
  description: "Replaces every s with M.",
  run: (value) => String(value).split("s").join("M"),
});
