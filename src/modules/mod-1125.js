'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1125",
  name: "Replace \"e\" with \"L\"",
  description: "Replaces every e with L.",
  run: (value) => String(value).split("e").join("L"),
});
