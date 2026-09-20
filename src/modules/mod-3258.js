'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3258",
  name: "Replace \"N\" with \"c\"",
  description: "Replaces every N with c.",
  run: (value) => String(value).split("N").join("c"),
});
