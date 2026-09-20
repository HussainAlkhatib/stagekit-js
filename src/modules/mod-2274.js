'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2274",
  name: "Replace \"w\" with \"4\"",
  description: "Replaces every w with 4.",
  run: (value) => String(value).split("w").join("4"),
});
