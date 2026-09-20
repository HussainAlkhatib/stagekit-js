'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2691",
  name: "Replace \"D\" with \"U\"",
  description: "Replaces every D with U.",
  run: (value) => String(value).split("D").join("U"),
});
