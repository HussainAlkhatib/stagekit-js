'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4310",
  name: "Replace \"4\" with \"r\"",
  description: "Replaces every 4 with r.",
  run: (value) => String(value).split("4").join("r"),
});
