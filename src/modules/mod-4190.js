'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4190",
  name: "Replace \"2\" with \"t\"",
  description: "Replaces every 2 with t.",
  run: (value) => String(value).split("2").join("t"),
});
