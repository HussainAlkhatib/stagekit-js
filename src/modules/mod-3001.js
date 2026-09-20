'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3001",
  name: "Replace \"I\" with \"Z\"",
  description: "Replaces every I with Z.",
  run: (value) => String(value).split("I").join("Z"),
});
