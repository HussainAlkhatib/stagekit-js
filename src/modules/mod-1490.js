'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1490",
  name: "Replace \"k\" with \"d\"",
  description: "Replaces every k with d.",
  run: (value) => String(value).split("k").join("d"),
});
