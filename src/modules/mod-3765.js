'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3765",
  name: "Replace \"V\" with \"v\"",
  description: "Replaces every V with v.",
  run: (value) => String(value).split("V").join("v"),
});
