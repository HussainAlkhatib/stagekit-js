'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0534",
  name: "Replace \"b\" with \"x\"",
  description: "Replaces every b with x.",
  run: (value) => String(value).split("b").join("x"),
});
