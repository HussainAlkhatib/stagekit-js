'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3279",
  name: "Replace \"N\" with \"x\"",
  description: "Replaces every N with x.",
  run: (value) => String(value).split("N").join("x"),
});
