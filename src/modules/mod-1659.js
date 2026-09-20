'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1659",
  name: "Replace \"m\" with \"Z\"",
  description: "Replaces every m with Z.",
  run: (value) => String(value).split("m").join("Z"),
});
