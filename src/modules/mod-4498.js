'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4498",
  name: "Replace \"7\" with \"w\"",
  description: "Replaces every 7 with w.",
  run: (value) => String(value).split("7").join("w"),
});
