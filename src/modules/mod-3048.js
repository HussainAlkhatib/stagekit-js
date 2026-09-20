'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3048",
  name: "Replace \"J\" with \"L\"",
  description: "Replaces every J with L.",
  run: (value) => String(value).split("J").join("L"),
});
