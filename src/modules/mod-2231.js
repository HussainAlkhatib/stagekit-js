'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2231",
  name: "Replace \"w\" with \"m\"",
  description: "Replaces every w with m.",
  run: (value) => String(value).split("w").join("m"),
});
