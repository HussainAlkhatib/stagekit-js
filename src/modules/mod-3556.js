'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3556",
  name: "Replace \"R\" with \"5\"",
  description: "Replaces every R with 5.",
  run: (value) => String(value).split("R").join("5"),
});
