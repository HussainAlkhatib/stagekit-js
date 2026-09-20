'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2527",
  name: "Replace \"B\" with \"d\"",
  description: "Replaces every B with d.",
  run: (value) => String(value).split("B").join("d"),
});
