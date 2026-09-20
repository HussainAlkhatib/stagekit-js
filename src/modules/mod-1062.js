'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1062",
  name: "Replace \"e\" with \"q\"",
  description: "Replaces every e with q.",
  run: (value) => String(value).split("e").join("q"),
});
