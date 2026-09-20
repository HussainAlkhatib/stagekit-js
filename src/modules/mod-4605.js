'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4605",
  name: "Replace \"9\" with \"h\"",
  description: "Replaces every 9 with h.",
  run: (value) => String(value).split("9").join("h"),
});
