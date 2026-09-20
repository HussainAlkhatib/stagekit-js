'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2373",
  name: "Replace \"y\" with \"H\"",
  description: "Replaces every y with H.",
  run: (value) => String(value).split("y").join("H"),
});
