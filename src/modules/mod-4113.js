'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4113",
  name: "Replace \"1\" with \"d\"",
  description: "Replaces every 1 with d.",
  run: (value) => String(value).split("1").join("d"),
});
