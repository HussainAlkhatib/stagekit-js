'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4194",
  name: "Replace \"2\" with \"x\"",
  description: "Replaces every 2 with x.",
  run: (value) => String(value).split("2").join("x"),
});
