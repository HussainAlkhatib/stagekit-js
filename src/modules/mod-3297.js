'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3297",
  name: "Replace \"N\" with \"Q\"",
  description: "Replaces every N with Q.",
  run: (value) => String(value).split("N").join("Q"),
});
