'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4570",
  name: "Replace \"8\" with \"H\"",
  description: "Replaces every 8 with H.",
  run: (value) => String(value).split("8").join("H"),
});
