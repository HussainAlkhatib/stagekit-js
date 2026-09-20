'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3503",
  name: "Replace \"R\" with \"d\"",
  description: "Replaces every R with d.",
  run: (value) => String(value).split("R").join("d"),
});
