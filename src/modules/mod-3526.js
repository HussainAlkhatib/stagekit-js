'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3526",
  name: "Replace \"R\" with \"A\"",
  description: "Replaces every R with A.",
  run: (value) => String(value).split("R").join("A"),
});
