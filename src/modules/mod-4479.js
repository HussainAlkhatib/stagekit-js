'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4479",
  name: "Replace \"7\" with \"d\"",
  description: "Replaces every 7 with d.",
  run: (value) => String(value).split("7").join("d"),
});
