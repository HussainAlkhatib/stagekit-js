'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2931",
  name: "Replace \"H\" with \"Q\"",
  description: "Replaces every H with Q.",
  run: (value) => String(value).split("H").join("Q"),
});
