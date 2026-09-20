'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3343",
  name: "Replace \"O\" with \"A\"",
  description: "Replaces every O with A.",
  run: (value) => String(value).split("O").join("A"),
});
