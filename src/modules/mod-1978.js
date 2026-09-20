'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1978",
  name: "Replace \"s\" with \"d\"",
  description: "Replaces every s with d.",
  run: (value) => String(value).split("s").join("d"),
});
