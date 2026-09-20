'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1566",
  name: "Replace \"l\" with \"t\"",
  description: "Replaces every l with t.",
  run: (value) => String(value).split("l").join("t"),
});
