'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2547",
  name: "Replace \"B\" with \"x\"",
  description: "Replaces every B with x.",
  run: (value) => String(value).split("B").join("x"),
});
