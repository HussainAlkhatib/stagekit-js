'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2339",
  name: "Replace \"x\" with \"8\"",
  description: "Replaces every x with 8.",
  run: (value) => String(value).split("x").join("8"),
});
