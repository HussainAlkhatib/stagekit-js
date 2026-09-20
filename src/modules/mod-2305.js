'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2305",
  name: "Replace \"x\" with \"A\"",
  description: "Replaces every x with A.",
  run: (value) => String(value).split("x").join("A"),
});
