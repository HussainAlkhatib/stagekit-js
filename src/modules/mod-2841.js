'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2841",
  name: "Replace \"G\" with \"m\"",
  description: "Replaces every G with m.",
  run: (value) => String(value).split("G").join("m"),
});
