'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2360",
  name: "Replace \"y\" with \"t\"",
  description: "Replaces every y with t.",
  run: (value) => String(value).split("y").join("t"),
});
