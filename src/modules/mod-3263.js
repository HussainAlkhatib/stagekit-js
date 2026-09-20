'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3263",
  name: "Replace \"N\" with \"h\"",
  description: "Replaces every N with h.",
  run: (value) => String(value).split("N").join("h"),
});
