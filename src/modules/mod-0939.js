'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0939",
  name: "Replace \"d\" with \"K\"",
  description: "Replaces every d with K.",
  run: (value) => String(value).split("d").join("K"),
});
