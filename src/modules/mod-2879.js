'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2879",
  name: "Replace \"G\" with \"Z\"",
  description: "Replaces every G with Z.",
  run: (value) => String(value).split("G").join("Z"),
});
