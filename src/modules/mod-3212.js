'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3212",
  name: "Replace \"M\" with \"r\"",
  description: "Replaces every M with r.",
  run: (value) => String(value).split("M").join("r"),
});
