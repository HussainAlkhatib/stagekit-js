'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2287",
  name: "Replace \"x\" with \"h\"",
  description: "Replaces every x with h.",
  run: (value) => String(value).split("x").join("h"),
});
