'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4579",
  name: "Replace \"8\" with \"Q\"",
  description: "Replaces every 8 with Q.",
  run: (value) => String(value).split("8").join("Q"),
});
