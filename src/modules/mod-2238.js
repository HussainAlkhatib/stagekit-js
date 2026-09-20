'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2238",
  name: "Replace \"w\" with \"t\"",
  description: "Replaces every w with t.",
  run: (value) => String(value).split("w").join("t"),
});
