'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3326",
  name: "Replace \"O\" with \"j\"",
  description: "Replaces every O with j.",
  run: (value) => String(value).split("O").join("j"),
});
