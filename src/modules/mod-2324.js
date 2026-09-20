'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2324",
  name: "Replace \"x\" with \"T\"",
  description: "Replaces every x with T.",
  run: (value) => String(value).split("x").join("T"),
});
