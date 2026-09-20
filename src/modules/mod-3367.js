'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3367",
  name: "Replace \"O\" with \"Z\"",
  description: "Replaces every O with Z.",
  run: (value) => String(value).split("O").join("Z"),
});
