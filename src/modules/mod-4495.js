'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4495",
  name: "Replace \"7\" with \"t\"",
  description: "Replaces every 7 with t.",
  run: (value) => String(value).split("7").join("t"),
});
