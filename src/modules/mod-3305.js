'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3305",
  name: "Replace \"N\" with \"Y\"",
  description: "Replaces every N with Y.",
  run: (value) => String(value).split("N").join("Y"),
});
