'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3113",
  name: "Replace \"K\" with \"P\"",
  description: "Replaces every K with P.",
  run: (value) => String(value).split("K").join("P"),
});
