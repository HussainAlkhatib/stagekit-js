'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1993",
  name: "Replace \"s\" with \"t\"",
  description: "Replaces every s with t.",
  run: (value) => String(value).split("s").join("t"),
});
