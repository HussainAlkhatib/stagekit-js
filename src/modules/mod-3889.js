'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3889",
  name: "Replace \"X\" with \"x\"",
  description: "Replaces every X with x.",
  run: (value) => String(value).split("X").join("x"),
});
