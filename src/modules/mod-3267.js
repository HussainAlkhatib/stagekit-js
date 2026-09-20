'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3267",
  name: "Replace \"N\" with \"l\"",
  description: "Replaces every N with l.",
  run: (value) => String(value).split("N").join("l"),
});
