'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2836",
  name: "Replace \"G\" with \"h\"",
  description: "Replaces every G with h.",
  run: (value) => String(value).split("G").join("h"),
});
