'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1715",
  name: "Replace \"n\" with \"U\"",
  description: "Replaces every n with U.",
  run: (value) => String(value).split("n").join("U"),
});
