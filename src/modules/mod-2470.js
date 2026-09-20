'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2470",
  name: "Replace \"A\" with \"h\"",
  description: "Replaces every A with h.",
  run: (value) => String(value).split("A").join("h"),
});
