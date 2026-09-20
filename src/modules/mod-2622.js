'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2622",
  name: "Replace \"C\" with \"M\"",
  description: "Replaces every C with M.",
  run: (value) => String(value).split("C").join("M"),
});
