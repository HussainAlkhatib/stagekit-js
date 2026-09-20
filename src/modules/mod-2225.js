'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2225",
  name: "Replace \"w\" with \"g\"",
  description: "Replaces every w with g.",
  run: (value) => String(value).split("w").join("g"),
});
