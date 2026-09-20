'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3431",
  name: "Replace \"P\" with \"2\"",
  description: "Replaces every P with 2.",
  run: (value) => String(value).split("P").join("2"),
});
