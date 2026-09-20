'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4497",
  name: "Replace \"7\" with \"v\"",
  description: "Replaces every 7 with v.",
  run: (value) => String(value).split("7").join("v"),
});
