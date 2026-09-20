'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3349",
  name: "Replace \"O\" with \"G\"",
  description: "Replaces every O with G.",
  run: (value) => String(value).split("O").join("G"),
});
