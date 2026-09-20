'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3280",
  name: "Replace \"N\" with \"y\"",
  description: "Replaces every N with y.",
  run: (value) => String(value).split("N").join("y"),
});
