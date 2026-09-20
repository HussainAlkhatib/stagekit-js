'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3899",
  name: "Replace \"X\" with \"H\"",
  description: "Replaces every X with H.",
  run: (value) => String(value).split("X").join("H"),
});
