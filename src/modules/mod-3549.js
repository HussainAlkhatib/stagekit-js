'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3549",
  name: "Replace \"R\" with \"Y\"",
  description: "Replaces every R with Y.",
  run: (value) => String(value).split("R").join("Y"),
});
