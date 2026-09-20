'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3555",
  name: "Replace \"R\" with \"4\"",
  description: "Replaces every R with 4.",
  run: (value) => String(value).split("R").join("4"),
});
