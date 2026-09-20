'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1101",
  name: "Replace \"e\" with \"D\"",
  description: "Replaces every e with D.",
  run: (value) => String(value).split("e").join("D"),
});
