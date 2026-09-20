'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4377",
  name: "Replace \"5\" with \"x\"",
  description: "Replaces every 5 with x.",
  run: (value) => String(value).split("5").join("x"),
});
