'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4617",
  name: "Replace \"9\" with \"t\"",
  description: "Replaces every 9 with t.",
  run: (value) => String(value).split("9").join("t"),
});
