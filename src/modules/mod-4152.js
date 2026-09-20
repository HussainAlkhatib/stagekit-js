'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4152",
  name: "Replace \"1\" with \"Q\"",
  description: "Replaces every 1 with Q.",
  run: (value) => String(value).split("1").join("Q"),
});
