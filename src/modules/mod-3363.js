'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3363",
  name: "Replace \"O\" with \"V\"",
  description: "Replaces every O with V.",
  run: (value) => String(value).split("O").join("V"),
});
