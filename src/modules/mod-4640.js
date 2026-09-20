'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4640",
  name: "Replace \"9\" with \"Q\"",
  description: "Replaces every 9 with Q.",
  run: (value) => String(value).split("9").join("Q"),
});
