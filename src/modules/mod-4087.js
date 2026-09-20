'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4087",
  name: "Replace \"0\" with \"M\"",
  description: "Replaces every 0 with M.",
  run: (value) => String(value).split("0").join("M"),
});
