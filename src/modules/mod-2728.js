'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2728",
  name: "Replace \"E\" with \"v\"",
  description: "Replaces every E with v.",
  run: (value) => String(value).split("E").join("v"),
});
