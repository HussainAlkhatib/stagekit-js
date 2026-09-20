'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0888",
  name: "Replace \"d\" with \"t\"",
  description: "Replaces every d with t.",
  run: (value) => String(value).split("d").join("t"),
});
