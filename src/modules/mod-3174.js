'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3174",
  name: "Replace \"L\" with \"P\"",
  description: "Replaces every L with P.",
  run: (value) => String(value).split("L").join("P"),
});
