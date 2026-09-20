'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3838",
  name: "Replace \"W\" with \"H\"",
  description: "Replaces every W with H.",
  run: (value) => String(value).split("W").join("H"),
});
