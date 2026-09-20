'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2011",
  name: "Replace \"s\" with \"L\"",
  description: "Replaces every s with L.",
  run: (value) => String(value).split("s").join("L"),
});
