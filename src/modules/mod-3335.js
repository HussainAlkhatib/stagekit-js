'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3335",
  name: "Replace \"O\" with \"s\"",
  description: "Replaces every O with s.",
  run: (value) => String(value).split("O").join("s"),
});
