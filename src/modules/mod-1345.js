'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1345",
  name: "Replace \"h\" with \"Q\"",
  description: "Replaces every h with Q.",
  run: (value) => String(value).split("h").join("Q"),
});
