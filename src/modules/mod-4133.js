'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4133",
  name: "Replace \"1\" with \"x\"",
  description: "Replaces every 1 with x.",
  run: (value) => String(value).split("1").join("x"),
});
