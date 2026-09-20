'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2984",
  name: "Replace \"I\" with \"H\"",
  description: "Replaces every I with H.",
  run: (value) => String(value).split("I").join("H"),
});
