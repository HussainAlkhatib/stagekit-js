'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3300",
  name: "Replace \"N\" with \"T\"",
  description: "Replaces every N with T.",
  run: (value) => String(value).split("N").join("T"),
});
