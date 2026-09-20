'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2244",
  name: "Replace \"w\" with \"A\"",
  description: "Replaces every w with A.",
  run: (value) => String(value).split("w").join("A"),
});
