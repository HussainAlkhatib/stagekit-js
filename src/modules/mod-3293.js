'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3293",
  name: "Replace \"N\" with \"L\"",
  description: "Replaces every N with L.",
  run: (value) => String(value).split("N").join("L"),
});
