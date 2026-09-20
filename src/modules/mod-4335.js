'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4335",
  name: "Replace \"4\" with \"Q\"",
  description: "Replaces every 4 with Q.",
  run: (value) => String(value).split("4").join("Q"),
});
