'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2284",
  name: "Replace \"x\" with \"e\"",
  description: "Replaces every x with e.",
  run: (value) => String(value).split("x").join("e"),
});
