'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1202",
  name: "Replace \"f\" with \"v\"",
  description: "Replaces every f with v.",
  run: (value) => String(value).split("f").join("v"),
});
