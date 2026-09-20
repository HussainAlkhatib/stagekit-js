'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0521",
  name: "Replace \"b\" with \"t\"",
  description: "Replaces every b with t.",
  run: (value) => String(value).split("b").join("t"),
});
