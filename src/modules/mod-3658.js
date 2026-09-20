'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3658",
  name: "Replace \"T\" with \"K\"",
  description: "Replaces every T with K.",
  run: (value) => String(value).split("T").join("K"),
});
