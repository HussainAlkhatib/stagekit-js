'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4300",
  name: "Replace \"4\" with \"h\"",
  description: "Replaces every 4 with h.",
  run: (value) => String(value).split("4").join("h"),
});
