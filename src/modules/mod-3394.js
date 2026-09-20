'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3394",
  name: "Replace \"P\" with \"q\"",
  description: "Replaces every P with q.",
  run: (value) => String(value).split("P").join("q"),
});
