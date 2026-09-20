'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3432",
  name: "Replace \"P\" with \"3\"",
  description: "Replaces every P with 3.",
  run: (value) => String(value).split("P").join("3"),
});
