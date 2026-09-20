'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1707",
  name: "Replace \"n\" with \"M\"",
  description: "Replaces every n with M.",
  run: (value) => String(value).split("n").join("M"),
});
