'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2602",
  name: "Replace \"C\" with \"r\"",
  description: "Replaces every C with r.",
  run: (value) => String(value).split("C").join("r"),
});
