'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3761",
  name: "Replace \"V\" with \"r\"",
  description: "Replaces every V with r.",
  run: (value) => String(value).split("V").join("r"),
});
