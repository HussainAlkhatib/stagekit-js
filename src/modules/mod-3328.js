'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3328",
  name: "Replace \"O\" with \"l\"",
  description: "Replaces every O with l.",
  run: (value) => String(value).split("O").join("l"),
});
