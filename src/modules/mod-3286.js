'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3286",
  name: "Replace \"N\" with \"E\"",
  description: "Replaces every N with E.",
  run: (value) => String(value).split("N").join("E"),
});
