'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4326",
  name: "Replace \"4\" with \"H\"",
  description: "Replaces every 4 with H.",
  run: (value) => String(value).split("4").join("H"),
});
