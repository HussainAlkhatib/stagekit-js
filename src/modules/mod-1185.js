'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1185",
  name: "Replace \"f\" with \"d\"",
  description: "Replaces every f with d.",
  run: (value) => String(value).split("f").join("d"),
});
