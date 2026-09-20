'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3428",
  name: "Replace \"P\" with \"Z\"",
  description: "Replaces every P with Z.",
  run: (value) => String(value).split("P").join("Z"),
});
