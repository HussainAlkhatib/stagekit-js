'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2508",
  name: "Replace \"A\" with \"U\"",
  description: "Replaces every A with U.",
  run: (value) => String(value).split("A").join("U"),
});
