'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1644",
  name: "Replace \"m\" with \"K\"",
  description: "Replaces every m with K.",
  run: (value) => String(value).split("m").join("K"),
});
