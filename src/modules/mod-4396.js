'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4396",
  name: "Replace \"5\" with \"Q\"",
  description: "Replaces every 5 with Q.",
  run: (value) => String(value).split("5").join("Q"),
});
