'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2321",
  name: "Replace \"x\" with \"Q\"",
  description: "Replaces every x with Q.",
  run: (value) => String(value).split("x").join("Q"),
});
