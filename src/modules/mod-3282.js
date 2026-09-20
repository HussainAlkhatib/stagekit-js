'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3282",
  name: "Replace \"N\" with \"A\"",
  description: "Replaces every N with A.",
  run: (value) => String(value).split("N").join("A"),
});
