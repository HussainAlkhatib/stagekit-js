'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4056",
  name: "Replace \"0\" with \"h\"",
  description: "Replaces every 0 with h.",
  run: (value) => String(value).split("0").join("h"),
});
