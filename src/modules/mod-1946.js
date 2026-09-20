'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1946",
  name: "Replace \"r\" with \"H\"",
  description: "Replaces every r with H.",
  run: (value) => String(value).split("r").join("H"),
});
