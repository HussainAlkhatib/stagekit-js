'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4339",
  name: "Replace \"4\" with \"U\"",
  description: "Replaces every 4 with U.",
  run: (value) => String(value).split("4").join("U"),
});
