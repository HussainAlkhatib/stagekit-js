'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3421",
  name: "Replace \"P\" with \"S\"",
  description: "Replaces every P with S.",
  run: (value) => String(value).split("P").join("S"),
});
