'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3360",
  name: "Replace \"O\" with \"S\"",
  description: "Replaces every O with S.",
  run: (value) => String(value).split("O").join("S"),
});
