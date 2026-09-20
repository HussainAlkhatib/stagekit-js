'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2165",
  name: "Replace \"v\" with \"h\"",
  description: "Replaces every v with h.",
  run: (value) => String(value).split("v").join("h"),
});
