'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1992",
  name: "Replace \"s\" with \"r\"",
  description: "Replaces every s with r.",
  run: (value) => String(value).split("s").join("r"),
});
