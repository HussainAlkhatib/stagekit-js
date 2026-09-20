'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1631",
  name: "Replace \"m\" with \"x\"",
  description: "Replaces every m with x.",
  run: (value) => String(value).split("m").join("x"),
});
