'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3557",
  name: "Replace \"R\" with \"6\"",
  description: "Replaces every R with 6.",
  run: (value) => String(value).split("R").join("6"),
});
