'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1083",
  name: "Replace \"e\" with \"x\"",
  description: "Replaces every e with x.",
  run: (value) => String(value).split("e").join("x"),
});
