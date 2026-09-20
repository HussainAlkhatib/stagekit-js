'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1167",
  name: "Replace \"e\" with \"Z\"",
  description: "Replaces every e with Z.",
  run: (value) => String(value).split("e").join("Z"),
});
