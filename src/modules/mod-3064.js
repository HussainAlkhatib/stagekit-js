'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3064",
  name: "Replace \"J\" with \"1\"",
  description: "Replaces every J with 1.",
  run: (value) => String(value).split("J").join("1"),
});
