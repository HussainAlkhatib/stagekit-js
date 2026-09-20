'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1092",
  name: "Replace \"e\" with \"A\"",
  description: "Replaces every e with A.",
  run: (value) => String(value).split("e").join("A"),
});
