'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3790",
  name: "Replace \"V\" with \"U\"",
  description: "Replaces every V with U.",
  run: (value) => String(value).split("V").join("U"),
});
