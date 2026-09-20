'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4619",
  name: "Replace \"9\" with \"v\"",
  description: "Replaces every 9 with v.",
  run: (value) => String(value).split("9").join("v"),
});
