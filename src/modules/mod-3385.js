'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3385",
  name: "Replace \"P\" with \"h\"",
  description: "Replaces every P with h.",
  run: (value) => String(value).split("P").join("h"),
});
