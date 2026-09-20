'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4011",
  name: "Replace \"Z\" with \"x\"",
  description: "Replaces every Z with x.",
  run: (value) => String(value).split("Z").join("x"),
});
