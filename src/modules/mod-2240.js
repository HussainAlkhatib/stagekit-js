'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2240",
  name: "Replace \"w\" with \"v\"",
  description: "Replaces every w with v.",
  run: (value) => String(value).split("w").join("v"),
});
