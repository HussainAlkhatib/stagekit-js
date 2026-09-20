'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2255",
  name: "Replace \"w\" with \"L\"",
  description: "Replaces every w with L.",
  run: (value) => String(value).split("w").join("L"),
});
