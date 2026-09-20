'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2300",
  name: "Replace \"x\" with \"u\"",
  description: "Replaces every x with u.",
  run: (value) => String(value).split("x").join("u"),
});
