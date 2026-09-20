'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1178",
  name: "Replace \"e\" with \"6\"",
  description: "Replaces every e with 6.",
  run: (value) => String(value).split("e").join("6"),
});
