'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4213",
  name: "Replace \"2\" with \"Q\"",
  description: "Replaces every 2 with Q.",
  run: (value) => String(value).split("2").join("Q"),
});
