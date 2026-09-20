'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3069",
  name: "Replace \"J\" with \"6\"",
  description: "Replaces every J with 6.",
  run: (value) => String(value).split("J").join("6"),
});
