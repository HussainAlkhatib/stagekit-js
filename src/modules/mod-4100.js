'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4100",
  name: "Replace \"0\" with \"Z\"",
  description: "Replaces every 0 with Z.",
  run: (value) => String(value).split("0").join("Z"),
});
