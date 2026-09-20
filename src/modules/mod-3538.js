'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3538",
  name: "Replace \"R\" with \"M\"",
  description: "Replaces every R with M.",
  run: (value) => String(value).split("R").join("M"),
});
