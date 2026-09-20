'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3371",
  name: "Replace \"O\" with \"3\"",
  description: "Replaces every O with 3.",
  run: (value) => String(value).split("O").join("3"),
});
