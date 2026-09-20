'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2332",
  name: "Replace \"x\" with \"1\"",
  description: "Replaces every x with 1.",
  run: (value) => String(value).split("x").join("1"),
});
