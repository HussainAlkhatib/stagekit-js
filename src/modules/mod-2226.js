'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2226",
  name: "Replace \"w\" with \"h\"",
  description: "Replaces every w with h.",
  run: (value) => String(value).split("w").join("h"),
});
