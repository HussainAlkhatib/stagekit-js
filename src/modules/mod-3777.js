'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3777",
  name: "Replace \"V\" with \"H\"",
  description: "Replaces every V with H.",
  run: (value) => String(value).split("V").join("H"),
});
