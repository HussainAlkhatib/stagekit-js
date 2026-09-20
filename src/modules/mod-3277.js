'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3277",
  name: "Replace \"N\" with \"v\"",
  description: "Replaces every N with v.",
  run: (value) => String(value).split("N").join("v"),
});
