'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3437",
  name: "Replace \"P\" with \"8\"",
  description: "Replaces every P with 8.",
  run: (value) => String(value).split("P").join("8"),
});
