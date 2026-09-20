'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3400",
  name: "Replace \"P\" with \"w\"",
  description: "Replaces every P with w.",
  run: (value) => String(value).split("P").join("w"),
});
