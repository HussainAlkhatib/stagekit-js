'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4573",
  name: "Replace \"8\" with \"K\"",
  description: "Replaces every 8 with K.",
  run: (value) => String(value).split("8").join("K"),
});
