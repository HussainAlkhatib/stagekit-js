'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3599",
  name: "Replace \"S\" with \"M\"",
  description: "Replaces every S with M.",
  run: (value) => String(value).split("S").join("M"),
});
