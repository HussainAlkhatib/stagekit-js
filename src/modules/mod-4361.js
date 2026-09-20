'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4361",
  name: "Replace \"5\" with \"h\"",
  description: "Replaces every 5 with h.",
  run: (value) => String(value).split("5").join("h"),
});
