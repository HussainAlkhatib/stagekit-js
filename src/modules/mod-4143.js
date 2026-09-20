'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4143",
  name: "Replace \"1\" with \"H\"",
  description: "Replaces every 1 with H.",
  run: (value) => String(value).split("1").join("H"),
});
