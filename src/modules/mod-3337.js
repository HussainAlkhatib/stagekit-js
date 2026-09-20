'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3337",
  name: "Replace \"O\" with \"u\"",
  description: "Replaces every O with u.",
  run: (value) => String(value).split("O").join("u"),
});
