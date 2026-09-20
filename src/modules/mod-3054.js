'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3054",
  name: "Replace \"J\" with \"R\"",
  description: "Replaces every J with R.",
  run: (value) => String(value).split("J").join("R"),
});
