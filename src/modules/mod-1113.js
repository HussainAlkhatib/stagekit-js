'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1113",
  name: "Replace \"e\" with \"H\"",
  description: "Replaces every e with H.",
  run: (value) => String(value).split("e").join("H"),
});
