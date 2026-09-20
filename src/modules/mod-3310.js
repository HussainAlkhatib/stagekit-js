'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3310",
  name: "Replace \"N\" with \"3\"",
  description: "Replaces every N with 3.",
  run: (value) => String(value).split("N").join("3"),
});
