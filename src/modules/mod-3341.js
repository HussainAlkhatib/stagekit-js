'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3341",
  name: "Replace \"O\" with \"y\"",
  description: "Replaces every O with y.",
  run: (value) => String(value).split("O").join("y"),
});
