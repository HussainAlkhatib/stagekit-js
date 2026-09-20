'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3260",
  name: "Replace \"N\" with \"e\"",
  description: "Replaces every N with e.",
  run: (value) => String(value).split("N").join("e"),
});
