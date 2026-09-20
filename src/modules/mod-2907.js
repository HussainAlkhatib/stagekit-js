'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2907",
  name: "Replace \"H\" with \"r\"",
  description: "Replaces every H with r.",
  run: (value) => String(value).split("H").join("r"),
});
