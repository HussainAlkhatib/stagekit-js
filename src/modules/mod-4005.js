'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4005",
  name: "Replace \"Z\" with \"r\"",
  description: "Replaces every Z with r.",
  run: (value) => String(value).split("Z").join("r"),
});
