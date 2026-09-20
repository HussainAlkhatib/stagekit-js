'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3641",
  name: "Replace \"T\" with \"t\"",
  description: "Replaces every T with t.",
  run: (value) => String(value).split("T").join("t"),
});
