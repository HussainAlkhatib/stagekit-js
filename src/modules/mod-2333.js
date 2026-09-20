'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2333",
  name: "Replace \"x\" with \"2\"",
  description: "Replaces every x with 2.",
  run: (value) => String(value).split("x").join("2"),
});
