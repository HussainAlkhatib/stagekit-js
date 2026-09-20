'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3045",
  name: "Replace \"J\" with \"H\"",
  description: "Replaces every J with H.",
  run: (value) => String(value).split("J").join("H"),
});
