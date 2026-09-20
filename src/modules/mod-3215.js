'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3215",
  name: "Replace \"M\" with \"u\"",
  description: "Replaces every M with u.",
  run: (value) => String(value).split("M").join("u"),
});
