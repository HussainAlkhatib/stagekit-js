'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3401",
  name: "Replace \"P\" with \"x\"",
  description: "Replaces every P with x.",
  run: (value) => String(value).split("P").join("x"),
});
