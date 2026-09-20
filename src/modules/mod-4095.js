'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4095",
  name: "Replace \"0\" with \"U\"",
  description: "Replaces every 0 with U.",
  run: (value) => String(value).split("0").join("U"),
});
