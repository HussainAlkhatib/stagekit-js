'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3541",
  name: "Replace \"R\" with \"P\"",
  description: "Replaces every R with P.",
  run: (value) => String(value).split("R").join("P"),
});
