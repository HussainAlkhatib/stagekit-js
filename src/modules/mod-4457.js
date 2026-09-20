'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4457",
  name: "Replace \"6\" with \"Q\"",
  description: "Replaces every 6 with Q.",
  run: (value) => String(value).split("6").join("Q"),
});
