'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2683",
  name: "Replace \"D\" with \"M\"",
  description: "Replaces every D with M.",
  run: (value) => String(value).split("D").join("M"),
});
