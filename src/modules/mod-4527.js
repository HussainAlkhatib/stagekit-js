'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4527",
  name: "Replace \"7\" with \"Z\"",
  description: "Replaces every 7 with Z.",
  run: (value) => String(value).split("7").join("Z"),
});
