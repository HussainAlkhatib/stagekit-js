'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1152",
  name: "Replace \"e\" with \"U\"",
  description: "Replaces every e with U.",
  run: (value) => String(value).split("e").join("U"),
});
