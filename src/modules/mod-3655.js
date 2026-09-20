'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3655",
  name: "Replace \"T\" with \"H\"",
  description: "Replaces every T with H.",
  run: (value) => String(value).split("T").join("H"),
});
