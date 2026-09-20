'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3311",
  name: "Replace \"N\" with \"4\"",
  description: "Replaces every N with 4.",
  run: (value) => String(value).split("N").join("4"),
});
