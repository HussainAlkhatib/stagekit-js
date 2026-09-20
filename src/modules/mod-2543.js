'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2543",
  name: "Replace \"B\" with \"t\"",
  description: "Replaces every B with t.",
  run: (value) => String(value).split("B").join("t"),
});
