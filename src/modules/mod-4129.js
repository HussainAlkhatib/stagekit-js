'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4129",
  name: "Replace \"1\" with \"t\"",
  description: "Replaces every 1 with t.",
  run: (value) => String(value).split("1").join("t"),
});
