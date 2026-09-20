'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3273",
  name: "Replace \"N\" with \"r\"",
  description: "Replaces every N with r.",
  run: (value) => String(value).split("N").join("r"),
});
