'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1065",
  name: "Replace \"e\" with \"r\"",
  description: "Replaces every e with r.",
  run: (value) => String(value).split("e").join("r"),
});
