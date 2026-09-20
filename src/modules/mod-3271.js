'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3271",
  name: "Replace \"N\" with \"p\"",
  description: "Replaces every N with p.",
  run: (value) => String(value).split("N").join("p"),
});
