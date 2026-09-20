'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4068",
  name: "Replace \"0\" with \"t\"",
  description: "Replaces every 0 with t.",
  run: (value) => String(value).split("0").join("t"),
});
