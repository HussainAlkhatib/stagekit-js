'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3038",
  name: "Replace \"J\" with \"A\"",
  description: "Replaces every J with A.",
  run: (value) => String(value).split("J").join("A"),
});
