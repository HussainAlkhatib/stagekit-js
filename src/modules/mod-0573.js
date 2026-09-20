'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0573",
  name: "Replace \"b\" with \"K\"",
  description: "Replaces every b with K.",
  run: (value) => String(value).split("b").join("K"),
});
