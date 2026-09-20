'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4483",
  name: "Replace \"7\" with \"h\"",
  description: "Replaces every 7 with h.",
  run: (value) => String(value).split("7").join("h"),
});
