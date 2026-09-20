'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1951",
  name: "Replace \"r\" with \"M\"",
  description: "Replaces every r with M.",
  run: (value) => String(value).split("r").join("M"),
});
