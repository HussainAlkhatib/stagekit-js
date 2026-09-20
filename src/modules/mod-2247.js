'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2247",
  name: "Replace \"w\" with \"D\"",
  description: "Replaces every w with D.",
  run: (value) => String(value).split("w").join("D"),
});
