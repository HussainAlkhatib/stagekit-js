'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2608",
  name: "Replace \"C\" with \"x\"",
  description: "Replaces every C with x.",
  run: (value) => String(value).split("C").join("x"),
});
