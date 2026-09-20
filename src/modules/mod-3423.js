'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3423",
  name: "Replace \"P\" with \"U\"",
  description: "Replaces every P with U.",
  run: (value) => String(value).split("P").join("U"),
});
