'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4270",
  name: "Replace \"3\" with \"M\"",
  description: "Replaces every 3 with M.",
  run: (value) => String(value).split("3").join("M"),
});
