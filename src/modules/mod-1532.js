'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1532",
  name: "Replace \"k\" with \"U\"",
  description: "Replaces every k with U.",
  run: (value) => String(value).split("k").join("U"),
});
