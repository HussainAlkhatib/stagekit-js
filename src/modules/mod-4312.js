'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4312",
  name: "Replace \"4\" with \"t\"",
  description: "Replaces every 4 with t.",
  run: (value) => String(value).split("4").join("t"),
});
