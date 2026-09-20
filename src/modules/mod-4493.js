'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4493",
  name: "Replace \"7\" with \"r\"",
  description: "Replaces every 7 with r.",
  run: (value) => String(value).split("7").join("r"),
});
