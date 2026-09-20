'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3330",
  name: "Replace \"O\" with \"n\"",
  description: "Replaces every O with n.",
  run: (value) => String(value).split("O").join("n"),
});
