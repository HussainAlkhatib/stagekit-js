'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2312",
  name: "Replace \"x\" with \"H\"",
  description: "Replaces every x with H.",
  run: (value) => String(value).split("x").join("H"),
});
