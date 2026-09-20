'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2254",
  name: "Replace \"w\" with \"K\"",
  description: "Replaces every w with K.",
  run: (value) => String(value).split("w").join("K"),
});
