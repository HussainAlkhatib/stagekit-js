'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3664",
  name: "Replace \"T\" with \"Q\"",
  description: "Replaces every T with Q.",
  run: (value) => String(value).split("T").join("Q"),
});
