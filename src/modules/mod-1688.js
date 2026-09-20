'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1688",
  name: "Replace \"n\" with \"t\"",
  description: "Replaces every n with t.",
  run: (value) => String(value).split("n").join("t"),
});
