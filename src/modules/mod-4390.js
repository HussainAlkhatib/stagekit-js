'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4390",
  name: "Replace \"5\" with \"K\"",
  description: "Replaces every 5 with K.",
  run: (value) => String(value).split("5").join("K"),
});
