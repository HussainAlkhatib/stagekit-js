'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3240",
  name: "Replace \"M\" with \"U\"",
  description: "Replaces every M with U.",
  run: (value) => String(value).split("M").join("U"),
});
