'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4621",
  name: "Replace \"9\" with \"x\"",
  description: "Replaces every 9 with x.",
  run: (value) => String(value).split("9").join("x"),
});
