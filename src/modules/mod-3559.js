'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3559",
  name: "Replace \"R\" with \"8\"",
  description: "Replaces every R with 8.",
  run: (value) => String(value).split("R").join("8"),
});
