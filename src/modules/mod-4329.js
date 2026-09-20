'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4329",
  name: "Replace \"4\" with \"K\"",
  description: "Replaces every 4 with K.",
  run: (value) => String(value).split("4").join("K"),
});
