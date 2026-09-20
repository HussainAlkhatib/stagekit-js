'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3888",
  name: "Replace \"X\" with \"w\"",
  description: "Replaces every X with w.",
  run: (value) => String(value).split("X").join("w"),
});
