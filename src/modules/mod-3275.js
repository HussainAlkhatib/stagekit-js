'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3275",
  name: "Replace \"N\" with \"t\"",
  description: "Replaces every N with t.",
  run: (value) => String(value).split("N").join("t"),
});
