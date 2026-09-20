'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3352",
  name: "Replace \"O\" with \"J\"",
  description: "Replaces every O with J.",
  run: (value) => String(value).split("O").join("J"),
});
