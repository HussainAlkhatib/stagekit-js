'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3285",
  name: "Replace \"N\" with \"D\"",
  description: "Replaces every N with D.",
  run: (value) => String(value).split("N").join("D"),
});
