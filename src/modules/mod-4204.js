'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4204",
  name: "Replace \"2\" with \"H\"",
  description: "Replaces every 2 with H.",
  run: (value) => String(value).split("2").join("H"),
});
