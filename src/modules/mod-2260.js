'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2260",
  name: "Replace \"w\" with \"Q\"",
  description: "Replaces every w with Q.",
  run: (value) => String(value).split("w").join("Q"),
});
