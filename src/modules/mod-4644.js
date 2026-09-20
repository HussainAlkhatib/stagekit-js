'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4644",
  name: "Replace \"9\" with \"U\"",
  description: "Replaces every 9 with U.",
  run: (value) => String(value).split("9").join("U"),
});
