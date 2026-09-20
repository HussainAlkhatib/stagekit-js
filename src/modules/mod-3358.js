'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3358",
  name: "Replace \"O\" with \"Q\"",
  description: "Replaces every O with Q.",
  run: (value) => String(value).split("O").join("Q"),
});
