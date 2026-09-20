'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3527",
  name: "Replace \"R\" with \"B\"",
  description: "Replaces every R with B.",
  run: (value) => String(value).split("R").join("B"),
});
