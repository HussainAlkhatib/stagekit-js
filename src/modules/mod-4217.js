'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4217",
  name: "Replace \"2\" with \"U\"",
  description: "Replaces every 2 with U.",
  run: (value) => String(value).split("2").join("U"),
});
