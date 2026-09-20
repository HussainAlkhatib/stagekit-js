'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2269",
  name: "Replace \"w\" with \"Z\"",
  description: "Replaces every w with Z.",
  run: (value) => String(value).split("w").join("Z"),
});
