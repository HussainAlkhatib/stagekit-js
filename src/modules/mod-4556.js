'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4556",
  name: "Replace \"8\" with \"t\"",
  description: "Replaces every 8 with t.",
  run: (value) => String(value).split("8").join("t"),
});
