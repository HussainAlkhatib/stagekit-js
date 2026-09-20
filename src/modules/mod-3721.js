'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3721",
  name: "Replace \"U\" with \"M\"",
  description: "Replaces every U with M.",
  run: (value) => String(value).split("U").join("M"),
});
