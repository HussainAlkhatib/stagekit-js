'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4192",
  name: "Replace \"2\" with \"v\"",
  description: "Replaces every 2 with v.",
  run: (value) => String(value).split("2").join("v"),
});
