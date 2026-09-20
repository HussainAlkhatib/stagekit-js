'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3904",
  name: "Replace \"X\" with \"M\"",
  description: "Replaces every X with M.",
  run: (value) => String(value).split("X").join("M"),
});
