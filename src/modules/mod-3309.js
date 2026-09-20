'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3309",
  name: "Replace \"N\" with \"2\"",
  description: "Replaces every N with 2.",
  run: (value) => String(value).split("N").join("2"),
});
