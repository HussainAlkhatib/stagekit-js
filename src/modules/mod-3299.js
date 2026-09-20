'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3299",
  name: "Replace \"N\" with \"S\"",
  description: "Replaces every N with S.",
  run: (value) => String(value).split("N").join("S"),
});
