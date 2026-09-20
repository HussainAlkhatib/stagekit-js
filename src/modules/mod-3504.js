'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3504",
  name: "Replace \"R\" with \"e\"",
  description: "Replaces every R with e.",
  run: (value) => String(value).split("R").join("e"),
});
