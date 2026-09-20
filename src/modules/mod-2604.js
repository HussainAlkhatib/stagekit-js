'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2604",
  name: "Replace \"C\" with \"t\"",
  description: "Replaces every C with t.",
  run: (value) => String(value).split("C").join("t"),
});
