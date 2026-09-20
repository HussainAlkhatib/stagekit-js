'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4316",
  name: "Replace \"4\" with \"x\"",
  description: "Replaces every 4 with x.",
  run: (value) => String(value).split("4").join("x"),
});
