'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3072",
  name: "Replace \"J\" with \"9\"",
  description: "Replaces every J with 9.",
  run: (value) => String(value).split("J").join("9"),
});
