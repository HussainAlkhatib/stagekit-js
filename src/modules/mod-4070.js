'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4070",
  name: "Replace \"0\" with \"v\"",
  description: "Replaces every 0 with v.",
  run: (value) => String(value).split("0").join("v"),
});
