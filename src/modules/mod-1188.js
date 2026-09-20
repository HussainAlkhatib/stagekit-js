'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1188",
  name: "Replace \"f\" with \"h\"",
  description: "Replaces every f with h.",
  run: (value) => String(value).split("f").join("h"),
});
