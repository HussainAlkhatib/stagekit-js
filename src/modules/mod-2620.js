'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2620",
  name: "Replace \"C\" with \"K\"",
  description: "Replaces every C with K.",
  run: (value) => String(value).split("C").join("K"),
});
