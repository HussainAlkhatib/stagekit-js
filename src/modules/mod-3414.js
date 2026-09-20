'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3414",
  name: "Replace \"P\" with \"K\"",
  description: "Replaces every P with K.",
  run: (value) => String(value).split("P").join("K"),
});
