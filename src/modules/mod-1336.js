'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1336",
  name: "Replace \"h\" with \"H\"",
  description: "Replaces every h with H.",
  run: (value) => String(value).split("h").join("H"),
});
