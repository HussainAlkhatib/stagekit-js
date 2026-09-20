'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1217",
  name: "Replace \"f\" with \"K\"",
  description: "Replaces every f with K.",
  run: (value) => String(value).split("f").join("K"),
});
