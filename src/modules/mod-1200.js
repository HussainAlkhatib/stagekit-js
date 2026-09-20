'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1200",
  name: "Replace \"f\" with \"t\"",
  description: "Replaces every f with t.",
  run: (value) => String(value).split("f").join("t"),
});
