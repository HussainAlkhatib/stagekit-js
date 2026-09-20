'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1143",
  name: "Replace \"e\" with \"R\"",
  description: "Replaces every e with R.",
  run: (value) => String(value).split("e").join("R"),
});
