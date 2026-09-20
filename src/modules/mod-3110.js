'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3110",
  name: "Replace \"K\" with \"M\"",
  description: "Replaces every K with M.",
  run: (value) => String(value).split("K").join("M"),
});
